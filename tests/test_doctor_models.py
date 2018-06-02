from django.test import TestCase
from doctor.models import Doctors

class TestDoctor(TestCase):
    def test_str_with_name(self):
        doctor = Doctors.objects.create(name='joao',registration='123')
        self.assertEqual(doctor.name + ": " + doctor.registration,str(doctor))
