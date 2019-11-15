from graphene import Boolean, Field, ID, String, DateTime, Float
from graphene import InputObjectType, Mutation
from rest_framework import serializers
from reports.models import Report
from .types import ReportType

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = (
            'id',
            'created_at',
            'description',
            'lon',
            'lat',
        )

class ReportInputType(InputObjectType):
    #created_at = DateTime()
    description = String()
    lon = Float()
    lat = Float()

class ReportCreate(Mutation):
    class Arguments:
        input = ReportInputType(required=True)
    report = Field(ReportType)

    @classmethod
    def mutate(cls, root, info, **data):
        serializer = ReportSerializer(data=data.get('input'))
        serializer.is_valid(raise_exception=True)

        return ReportCreate(report=serializer.save())

class ReportDelete(Mutation):
    class Arguments:
        id = ID(required=True)

    ok = Boolean()

    @classmethod
    def mutate(cls, root, info, **data):
        report = Report.objects.get(id=data.get('id'))
        report.delete()

        return ReportDelete(ok=True)
