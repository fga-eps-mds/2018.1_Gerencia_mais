import datetime

from django.test import TestCase
from django.utils import timezone

from schedule.models import Calendar, CalendarRelation, Event, Rule

class TestCalendar(TestCase):
    def test_get_recent_events_without_events_is_empty(self):
        calendar = Calendar()
        self.assertEqual(list(calendar.get_recent()), [])

    def test_get_recent_events_with_events_return_the_event(self):
        pass

    def test_get_calendar_for_object(self):
        calendar = Calendar.objects.create(name='My Cal')
        rule = Rule.objects.create()
        calendar.create_relation(rule)
        result = Calendar.objects.get_calendar_for_object(rule)
        self.assertEqual(result.name, 'My Cal')

    def test_get_calendar_for_object_without_calendars(self):
        with self.assertRaises(Calendar.DoesNotExist):
            rule = Rule.objects.create()
            Calendar.objects.get_calendar_for_object(rule)

    def test_get_calendar_for_object_with_more_than_one_calendar(self):
        calendar_1 = Calendar.objects.create(name='My Cal 1', slug='my-cal-1')
        calendar_2 = Calendar.objects.create(name='My Cal 2', slug='my-cal-2')
        rule = Rule.objects.create()
        calendar_1.create_relation(rule)
        calendar_2.create_relation(rule)
        with self.assertRaises(AssertionError):
            Calendar.objects.get_calendar_for_object(rule)

    def test_get_or_create_calendar_for_object_without_calendar(self):
        """
            Creation test
        """
        rule = Rule.objects.create()
        calendar = Calendar.objects.get_or_create_calendar_for_object(rule, name='My Cal')
        self.assertEqual(calendar.name, 'My Cal')
        calendar_from_rule = Calendar.objects.get_calendars_for_object(rule)[0]
        self.assertEqual(calendar, calendar_from_rule)

    def test_get_or_create_calendar_for_object_withouth_name(self):
        """
            Test with already created calendar
        """
        rule = Rule.objects.create()
        calendar = Calendar.objects.get_or_create_calendar_for_object(rule)
        calendar_from_rule = Calendar.objects.get_calendars_for_object(rule)[0]
        self.assertEqual(calendar, calendar_from_rule)

    def test_get_calendars_for_object_without_calendars(self):
        rule = Rule.objects.create()
        Calendar.objects.get_or_create_calendar_for_object(rule, name='My Cal', distinction='owner')
        rule = Rule.objects.create()
        calendars = list(Calendar.objects.get_calendars_for_object(rule, distinction='owner'))
        self.assertEqual(len(calendars), 0)

    # def test_calendar_absolute_and_event_url(self):
    #     """
    #         this test seems to not make too much send, just added since an
    #         url was with wrong reverse name.
    #
    #     """
    #     rule = Rule.objects.create()
    #     calendar = Calendar.objects.get_or_create_calendar_for_object(rule, name='My Cal', distinction='owner')
    #     calendar.get_absolute_url()
    #     CalendarRelation.objects.create_relation(calendar, rule)
