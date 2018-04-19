import datetime

import pytz
from django.contrib.auth.models import User
from django.test import TestCase
from django.test.utils import override_settings
from django.urls import reverse
from django.utils import timezone

from schedule.models import Calendar, Event, EventRelation, Rule


class TestEvent(TestCase):
    def __create_event(self, title, start, end, cal, status):
        return Event.objects.create(
	    status = status,
            title=title,
            start=start,
            end=end,
            calendar=cal,
        )

    def __create_recurring_event(self, title, start, end, end_recurring, rule, cal):
        return Event.objects.create(
            title=title,
            start=start,
            end=end,
            end_recurring_period=end_recurring,
            rule=rule,
            calendar=cal,
        )

    def test_prevent_type_error_when_comparing_naive_and_aware_dates(self):
        # this only test if the TypeError is raised
        cal = Calendar.objects.create(name="MyCal")
        rule = Rule.objects.create(frequency="WEEKLY")

        event = self.__create_recurring_event(
            'Recurrent event test get_occurrence',
            datetime.datetime(2008, 1, 5, 8, 0, tzinfo=pytz.utc),
            datetime.datetime(2008, 1, 5, 9, 0, tzinfo=pytz.utc),
            datetime.datetime(2008, 5, 5, 0, 0, tzinfo=pytz.utc),
            rule,
            cal,
        )
        naive_date = datetime.datetime(2008, 1, 20, 0, 0)
        self.assertIsNone(event.get_occurrence(naive_date))

    @override_settings(USE_TZ=False)
    def test_prevent_type_error_when_comparing_dates_when_tz_off(self):
        cal = Calendar.objects.create(name="MyCal")
        rule = Rule.objects.create(frequency="WEEKLY")

        event = self.__create_recurring_event(
            'Recurrent event test get_occurrence',
            datetime.datetime(2008, 1, 5, 8, 0),
            datetime.datetime(2008, 1, 5, 9, 0),
            datetime.datetime(2008, 5, 5, 0, 0),
            rule,
            cal,
        )
        naive_date = datetime.datetime(2008, 1, 20, 0, 0)
        self.assertIsNone(event.get_occurrence(naive_date))

    def test_get_for_object(self):
        user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
        event_relations = list(Event.objects.get_for_object(user, 'owner', inherit=False))
        self.assertEqual(len(event_relations), 0)

        Rule.objects.create(frequency="DAILY")
        cal = Calendar.objects.create(name='MyCal')
        event = self.__create_event(
            'event test',
            datetime.datetime(2013, 1, 5, 8, 0, tzinfo=pytz.utc),
            datetime.datetime(2013, 1, 5, 9, 0, tzinfo=pytz.utc),
            cal,
            status = None,
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
