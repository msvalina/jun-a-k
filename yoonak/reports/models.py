from django.db import models

from uuid import uuid4
import datetime
import os

# Create your models here.


def image_direcotry_path_uuid(instance, filename):
    year_month = datetime.date.today().strftime("%Y/%m")
    ext = os.path.splitext(filename)[1]
    return 'uploads/{0}/{1}{2}'.format(year_month, str(uuid4())[-12:], ext)

class ReportModel(models.Model):
    """Model for reported images"""
    # TODO convert to jpg and resize to file size less then XX

    created_at = models.DateTimeField('created at', auto_now=True)
    created_at_img = models.DateTimeField('image created at')
    # file will be saved to MEDIA_ROOT/uploads/2019/01/uuid.ext
    image = models.ImageField(upload_to=image_direcotry_path_uuid)
    # Precission https://stackoverflow.com/a/30711177 up to 10 cm
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    lat = models.DecimalField(max_digits=9, decimal_places=6)


    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Report Model'
        verbose_name_plural = 'Reports Models'
