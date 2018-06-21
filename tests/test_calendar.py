import datetime

from django.test import TestCase
from django.utils import timezone

from schedule.models import Calendar, CalendarRelation, Event

class TestCalendar(TestCase):

    def test_get_recent_events_without_events_is_empty(self):
        calendar = Calendar()
        self.assertEqual(list(calendar.get_recent()), [])

    def test_get_recent_events_with_events_return_the_event(self):
        pass
