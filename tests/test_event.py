import datetime

import pytz
from django.contrib.auth.models import User
from django.test import TestCase
from django.test.utils import override_settings
from django.urls import reverse
from django.utils import timezone

from schedule.models import Calendar, Event, EventRelation, Rule

from subtitle.models import Subtitles

subtitle = Subtitles(3)
calendar = Calendar(1)

class TestEvent(TestCase):
    def __create_event(self, start, end, calendar):
        calendar = Calendar(1)
        return Event.objects.create(
            subtitle=subtitle,
            start=start,
            end=end,
            calendar=calendar,
        )

    def __create_recurring_event(self, start, end, end_recurring, rule, calendar):
        return Event.objects.create(
            subtitle=subtitle,
            start=start,
            end=end,
            end_recurring_period=end_recurring,
            rule=rule,
            calendar=calendar,
        )




    def test_get_for_object(self):
        user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
        event_relations = list(Event.objects.get_for_object(user, 'owner', inherit=False))
        self.assertEqual(len(event_relations), 0)

        Rule.objects.create(frequency="DAILY")
        cal = Calendar.objects.create(name='MyCal')
        cal = calendar
        event = self.__create_event(
            datetime.datetime(2013, 1, 5, 8, 0, tzinfo=pytz.utc),
            datetime.datetime(2013, 1, 5, 9, 0, tzinfo=pytz.utc),
            cal,
        )
        events = list(Event.objects.get_for_object(user, 'owner', inherit=False))
        self.assertEqual(len(events), 0)
        EventRelation.objects.create_relation(event, user, 'owner')

        events = list(Event.objects.get_for_object(user, 'owner', inherit=False))
        self.assertEqual(len(events), 1)
        self.assertEqual(event, events[0])



class TestEventRelationManager(TestCase):

    def test_get_events_for_object(self):
        pass
