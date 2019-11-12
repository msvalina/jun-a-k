from django.db import models
from uuid import uuid4
import datetime

# Create your models here.


def image_direcotry_path_uuid(instance, filename):
    year_month = datetime.date.today().strftime("%Y/%m")
    return 'uploads/{0}/{1}'.format(year_month, uuid4())

class ReportModel(models.Model):
    """Model for reported images"""

    created_at = models.DateTimeField('created at')
    img_created_at = models.DateTimeField('image created at')
    # file will be saved to MEDIA_ROOT/uploads/2019/01/uuid
    reported_img = models.ImageField(upload_to=image_direcotry_path_uuid)


    def __str__(self):
        pass

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Report Model'
        verbose_name_plural = 'Reports Models'
