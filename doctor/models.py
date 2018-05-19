from django.db import models
from django.utils.translation import ugettext

class Doctors(models.Model):
    name = models.CharField(max_length=255)
    status = models.NullBooleanField()
    registration = models. CharField(max_length=50, unique=True)
    CPF = models.CharField(max_length=100, unique= True)
    category = models.CharField(max_length=50)

    def __str__(self):
        return ugettext('%(name)s: %(registration)s') % {
            'name': self.name,
            'registration': self.registration,
        }
