import datetime

from django.test import TestCase
from django.utils import timezone
from django.contrib.auth.models import User
from schedule.models import Calendar, CalendarRelation, Event

class TestCalendar(TestCase):

    def test_get_recent_events_without_events_is_empty(self):
        calendar = Calendar()
        self.assertEqual(list(calendar.get_recent()), [])

    def test_get_recent_events_with_events_return_the_event(self):
        pass

    def test_create_calendar_relation(self):
        user = User.objects.create(username='guilherme',password='guilherme123')
        user.save()
        calendar = Calendar(name = 'Test Calendar')
        calendar.save()
        relation = calendar.create_relation(user)
        self.assertEqual(relation,None)

    def test_create_calendar_for_object(self):
        user = User(username="jeremy")
        user.save()
        calendar = Calendar.objects.get_or_create_calendar_for_object(user, name = "Jeremy's Calendar")
        self.assertEqual(calendar.name,"Jeremy's Calendar")

    def test_get_calendar_for_object(self):
        user = User(username="jeremy")
        user.save()
        calendar = Calendar(name='My Cal',slug='My Cal')
        calendar.save()
        calendar.create_relation(user)
        calendar_object = Calendar.objects.get_calendar_for_object(user)
        self.assertEqual(calendar_object.slug,'My Cal')

        calendar = Calendar(name='My 2nd Cal')
        calendar.save()
        try:
            calendar.create_relation(user)
        except Exception as error:
            self.assertRaises(error, AssertionError("More than one calendars were found."))
