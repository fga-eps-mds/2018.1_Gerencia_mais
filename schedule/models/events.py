# -*- coding: utf-8 -*-
from __future__ import division, unicode_literals

import datetime

from dateutil import rrule
from django.conf import settings as django_settings
from django.contrib.contenttypes import fields
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.db.models import Q
from django.template.defaultfilters import date
from django.urls import reverse
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext
from django.utils.translation import ugettext_lazy as _

from doctor.models import Doctors

from subtitle.models import Subtitles

from schedule.models.calendars import Calendar

freq_dict_order = {
    'YEARLY': 0,
    'MONTHLY': 1,
    'WEEKLY': 2,
    'DAILY': 3,
    'HOURLY': 4,
    'MINUTELY': 5,
    'SECONDLY': 6
}
param_dict_order = {
    'byyearday': 1,
    'bymonth': 1,
    'bymonthday': 2,
    'byweekno': 2,
    'byweekday': 3,
    'byhour': 4,
    'byminute': 5,
    'bysecond': 6
}


class EventManager(models.Manager):
    def get_for_object(self, content_object, distinction='', inherit=True):
        return EventRelation.objects.get_events_for_object(content_object, distinction, inherit)


@python_2_unicode_compatible
class Event(models.Model):
    '''
    This model stores meta data for a date.  You can relate this data to many
    other models.
    '''
    start = models.DateTimeField(_("Inicio"), db_index=True)
    end = models.DateTimeField(_("Fim"), db_index=True, help_text=_("O horário de término deve ser posterior ao horário de início."))
    doctor = models.ForeignKey(
        Doctors,
        on_delete=None,
        null = True,
        blank = True,
        verbose_name =_("doctor"),
        related_name='doctor')
    subtitle = models.ForeignKey(
        Subtitles,
        on_delete=None,
        null = True,
        blank = True,
        verbose_name =_("subtitle"),
        related_name='subtitle')
    hospital = models.CharField(_("Hospital"), max_length=100)
    description = models.TextField(_("Descrição"), blank=True)
    created_on = models.DateTimeField(_("Criado em"), auto_now_add=True)
    updated_on = models.DateTimeField(_("Atualizado em"), auto_now=True)
    creator = models.ForeignKey(
        django_settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        verbose_name=_("creator"),
        related_name='creator')
    end_recurring_period = models.DateTimeField(_("Período Final Recorrente"), null=True, blank=True, db_index=True,
                                                help_text=_("Esta data é ignorada apenas para eventos únicos."))
    calendar = models.ForeignKey(
        Calendar,
        on_delete=models.CASCADE,
        verbose_name=_("Calendário"))
    objects = EventManager()

    class Meta(object):
        verbose_name = _('event')
        verbose_name_plural = _('events')
        index_together = (
            ('start', 'end'),
        )

    def __str__(self):
        return ugettext('%(start)s - %(end)s') % {
            'start': date(self.start, django_settings.DATE_FORMAT),
            'end': date(self.end, django_settings.DATE_FORMAT),
        }

    def is_this_month(self,month):
        if self.start.month == month or self.end.month == month:
            return True
        else:
            return False

    @property
    def seconds(self):
        return (self.end - self.start).total_seconds()

    @property
    def minutes(self):
        return float(self.seconds) / 60

    @property
    def hours(self):
        return float(self.seconds) / 3600

    def get_absolute_url(self):
        return reverse('event', args=[self.id])




    @property
    def event_start_params(self):
        start = self.start
        params = {
            'byyearday': start.timetuple().tm_yday,
            'bymonth': start.month,
            'bymonthday': start.day,
            'byweekno': start.isocalendar()[1],
            'byweekday': start.weekday(),
            'byhour': start.hour,
            'byminute': start.minute,
            'bysecond': start.second
        }
        return params


    @property
    def event_params(self):
        event_params = self._event_params()
        start = self.effective_start
        empty = False
        if not start:
            empty = True
        elif self.end_recurring_period and start > self.end_recurring_period:
            empty = True
        return event_params, empty

    @property
    def effective_start(self):
        if self.pk and self.end_recurring_period:
            occ_generator = self._occurrences_after_generator(self.start)
            try:
                return next(occ_generator).start
            except StopIteration:
                pass
        elif self.pk:
            return self.start
        return None

    @property
    def effective_end(self):
        if self.pk and self.end_recurring_period:
            params, empty = self.event_params
            if empty or not self.effective_start:
                return None
            elif self.end_recurring_period:
                occ = None
                occ_generator = self._occurrences_after_generator(self.start)
                for occ in occ_generator:
                    pass
                return occ.end
        elif self.pk:
            return datetime.datetime.max
        return None


class EventRelationManager(models.Manager):
    '''
    >>> import datetime
    >>> EventRelation.objects.all().delete()
    >>> CalendarRelation.objects.all().delete()
    >>> data = {
    ...         'title': 'Test1',
    ...         'start': datetime.datetime(2008, 1, 1),
    ...         'end': datetime.datetime(2008, 1, 11)
    ...        }
    >>> Event.objects.all().delete()
    >>> event1 = Event(**data)
    >>> event1.save()
    >>> data['title'] = 'Test2'
    >>> event2 = Event(**data)
    >>> event2.save()
    >>> user1 = User(username='alice')
    >>> user1.save()
    >>> user2 = User(username='bob')
    >>> user2.save()
    >>> event1.create_relation(user1, 'owner')
    >>> event1.create_relation(user2, 'viewer')
    >>> event2.create_relation(user1, 'viewer')
    '''
    # Currently not supported
    # Multiple level reverse lookups of generic relations appears to be
    # unsupported in Django, which makes sense.
    #
    # def get_objects_for_event(self, event, model, distinction=None):
    #     '''
    #     returns a queryset full of instances of model, if it has an EventRelation
    #     with event, and distinction
    #     >>> event = Event.objects.get(title='Test1')
    #     >>> EventRelation.objects.get_objects_for_event(event, User, 'owner')
    #     [<User: alice>]
    #     >>> EventRelation.objects.get_objects_for_event(event, User)
    #     [<User: alice>, <User: bob>]
    #     '''
    #     if distinction:
    #         dist_q = Q(eventrelation__distinction = distinction)
    #     else:
    #         dist_q = Q()
    #     ct = ContentType.objects.get_for_model(model)
    #     return model.objects.filter(
    #         dist_q,
    #         eventrelation__content_type = ct,
    #         eventrelation__event = event
    #     )

    def get_events_for_object(self, content_object, distinction='', inherit=True):
        '''
        returns a queryset full of events, that relate to the object through, the
        distinction

        If inherit is false it will not consider the calendars that the events
        belong to. If inherit is true it will inherit all of the relations and
        distinctions that any calendar that it belongs to has, as long as the
        relation has inheritable set to True.  (See Calendar)

        >>> event = Event.objects.get(title='Test1')
        >>> user = User.objects.get(username = 'alice')
        >>> EventRelation.objects.get_events_for_object(user, 'owner', inherit=False)
        [<Event: Test1: Tuesday, Jan. 1, 2008-Friday, Jan. 11, 2008>]

        If a distinction is not declared it will not vet the relations based on
        distinction.
        >>> EventRelation.objects.get_events_for_object(user, inherit=False)
        [<Event: Test1: Tuesday, Jan. 1, 2008-Friday, Jan. 11, 2008>, <Event: Test2: Tuesday, Jan. 1, 2008-Friday, Jan. 11, 2008>]

        Now if there is a Calendar
        >>> calendar = Calendar(name = 'MyProject')
        >>> calendar.save()

        And an event that belongs to that calendar
        >>> event = Event.objects.get(title='Test2')
        >>> calendar.events.add(event)

        If we relate this calendar to some object with inheritable set to true,
        that relation will be inherited
        >>> user = User.objects.get(username='bob')
        >>> cr = calendar.create_relation(user, 'viewer', True)
        >>> EventRelation.objects.get_events_for_object(user, 'viewer')
        [<Event: Test1: Tuesday, Jan. 1, 2008-Friday, Jan. 11, 2008>, <Event: Test2: Tuesday, Jan. 1, 2008-Friday, Jan. 11, 2008>]
        '''
        ct = ContentType.objects.get_for_model(type(content_object))
        if distinction:
            dist_q = Q(eventrelation__distinction=distinction)
            cal_dist_q = Q(calendar__calendarrelation__distinction=distinction)
        else:
            dist_q = Q()
            cal_dist_q = Q()
        if inherit:
            inherit_q = Q(
                cal_dist_q,
                calendar__calendarrelation__content_type=ct,
                calendar__calendarrelation__object_id=content_object.id,
                calendar__calendarrelation__inheritable=True,
            )
        else:
            inherit_q = Q()
        event_q = Q(dist_q, eventrelation__content_type=ct, eventrelation__object_id=content_object.id)
        return Event.objects.filter(inherit_q | event_q)

    def create_relation(self, event, content_object, distinction=''):
        """
        Creates a relation between event and content_object.
        See EventRelation for help on distinction.
        """
        return EventRelation.objects.create(
            event=event,
            distinction=distinction,
            content_object=content_object)


@python_2_unicode_compatible
class EventRelation(models.Model):
    '''
    This is for relating data to an Event, there is also a distinction, so that
    data can be related in different ways.  A good example would be, if you have
    events that are only visible by certain users, you could create a relation
    between events and users, with the distinction of 'visibility', or
    'ownership'.

    event: a foreign key relation to an Event model.
    content_type: a foreign key relation to ContentType of the generic object
    object_id: the id of the generic object
    content_object: the generic foreign key to the generic object
    distinction: a string representing a distinction of the relation, User could
    have a 'viewer' relation and an 'owner' relation for example.

    DISCLAIMER: while this model is a nice out of the box feature to have, it
    may not scale well.  If you use this keep that in mind.
    '''
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name=_("event"))
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.IntegerField(db_index=True)
    content_object = fields.GenericForeignKey('content_type', 'object_id')
    distinction = models.CharField(_("distinction"), max_length=20)

    objects = EventRelationManager()

    class Meta(object):
        verbose_name = _("event relation")
        verbose_name_plural = _("event relations")
        index_together = [('content_type', 'object_id')]

    def __str__(self):
        return '(%s)-%s' % (self.distinction, self.content_object)
