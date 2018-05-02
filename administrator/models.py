from django.db import models

class Administrator(models.Model):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 100)
    adress = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 100)
    key = models.CharField(max_length = 100)

    def __str__(self):
        return name
