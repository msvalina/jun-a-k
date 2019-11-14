from django.contrib import admin

# Register your models here.

from .models import ReportModel

admin.site.register(ReportModel)

#TODO Add django https://github.com/matthewwithanm/django-imagekit
#TODO or some other way to Show Image on Django Admin
# https://stackoverflow.com/q/16307307