from django.db import models

class DaysHour(models.Model):
    hour_0_2 = models.BooleanField()
    hour_2_4 = models.BooleanField()
    hour_4_6 = models.BooleanField()
    hour_6_8 = models.BooleanField()
    hour_8_10 = models.BooleanField()
    hour_10_12 = models.BooleanField()
    hour_12_14 = models.BooleanField()
    hour_14_16 = models.BooleanField()
    hour_16_18 = models.BooleanField()
    hour_18_20 = models.BooleanField()
    hour_20_22 = models.BooleanField()
    hour_22_0 = models.BooleanField()

class WeekHour(models.Model):
    days = models.ForeignKey(DaysHour,on_delete=models.CASCADE)

class MonthHour(models.Model):
    week = models.ForeignKey(WeekHour,on_delete=models.CASCADE)

class Doctor(models.Model):
    name=models.CharField(max_length=100)
    workload=models.IntegerField()
    category=models.CharField(max_length=50)
    hospital=models.CharField(max_length=50)
    CPF=models.CharField(max_length=20)
    registration=models.CharField(max_length=20)
    status=models.BooleanField()
    comment=models.TextField()
    month = models.ForeignKey(MonthHour,on_delete=models.CASCADE)
    class Meta:
        pass
