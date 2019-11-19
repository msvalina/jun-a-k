from django.db import models
from django.utils.translation import ugettext_lazy as _ 

from uuid import uuid4
import datetime
import os

# Create your models here.


def image_direcotry_path_uuid(instance, filename):
    year_month = datetime.date.today().strftime("%Y/%m")
    ext = os.path.splitext(filename)[1]
    return 'uploads/{0}/{1}{2}'.format(year_month, str(uuid4())[-12:], ext)

class Report(models.Model):
    """Model for reported images"""
    # TODO convert to jpg and resize to file size less then XX

    created_at = models.DateTimeField(
        'Created at',
        auto_now=True,
        )
    created_at_img = models.DateTimeField(
        'Image created at',
        auto_now=True,
        )
    image = models.ImageField(
        # file will be saved to MEDIA_ROOT/uploads/2019/01/uuid.ext
        upload_to=image_direcotry_path_uuid, 
        blank=True, # For now
        null=True, # Let's set this to be not mandatory. 
        )
    description = models.CharField(
        max_length=500,
        blank=True,
        )
    lon = models.DecimalField(
        # Precission https://stackoverflow.com/a/30711177 up to 10 cm
        max_digits=9, 
        decimal_places=6,
        blank=True,
        null=True,
        )
    lat = models.DecimalField(
        max_digits=9, 
        decimal_places=6,
        blank=True,
        null=True,
        )
    location = models.CharField(
        max_length=50,
        blank=True,
    )


    class Meta:
        db_table = ''
        managed = True
        verbose_name = _('Report')
        verbose_name_plural = _('Reports')
        ordering = ('-created_at', )

    def __str__(self):
        return 'Report {} (#{})'.format(self.created_at, self.pk)
