from django.db import models

class Doctors(models.Model):
    name = models.CharField(max_length=255)
    status = models.NullBooleanField()
    registration = models. CharField(max_length=50, unique=True)
    CPF = models.CharField(max_length=100, unique= True)
