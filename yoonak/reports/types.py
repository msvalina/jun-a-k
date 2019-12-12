from graphene import Field
from graphene import String, Int
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
            'status',
        )
        convert_choices_to_enum = ['status']
        use_connection = True
