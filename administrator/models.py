from django.db import models
from django.utils.translation import ugettext


class Administrator(models.Model):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 100,unique=True)
    adress = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 100)
    key = models.CharField(max_length = 100)

    def __str__(self):
        return ugettext('%(name)s: %(email)s - %(phone)s') % {
            'name': self.name,
            'email':self.email,
            'phone':self.phone,
        }
