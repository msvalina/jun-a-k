from graphene_django import DjangoObjectType
from .models import Report

class ReportType(DjangoObjectType):
    class Meta:
        model = Report
        only_fields = (
            'id',
            'image',
            'created_at',
            'description',
            'location',
            'lon',
            'lat',
        )
        use_connection = True
