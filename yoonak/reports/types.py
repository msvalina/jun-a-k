from graphene_django import DjangoObjectType
from .models import Report

class ReportType(DjangoObjectType):
    class Meta:
        model = Report
        only_fields = (
            'id',
            'created_at',
            'description',
            'lon',
            'lat',
        )
        use_connection = True
