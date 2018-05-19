from django.db import models
from django.utils.translation import ugettext


class Subtitles(models.Model):
    code = models.CharField(max_length=100, unique=True)
    begin = models.CharField(max_length=10)
    finish = models.CharField(max_length=10)
    description = models.CharField(max_length=100)

    def __str__(self):
        return ugettext('%(code)s: %(begin)s: %(finish)s: %(description)s') % {
            'code': self.code,
            'begin': self.begin,
            'finish': self.finish,
            'description': self.description,
        }
