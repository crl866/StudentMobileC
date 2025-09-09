from django.db import models

# Create your models here.
class StudentRecord(models.Model):
    student_id = models.CharField(max_length=100)
    full_name = models.CharField(max_length=100)
    course = models.CharField(max_length=150)
    year_level = models.IntegerField()
    date_registered = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.student_id}"