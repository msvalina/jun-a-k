from django.contrib import admin

# Register your models here.

from .models import ReportModel

admin.site.register(ReportModel)