from graphene import Argument, Field, ID, ObjectType, Schema
from graphene_django import DjangoConnectionField
from .models import Report
from .types import ReportType

class Query(ObjectType):
    reports = DjangoConnectionField(ReportType)
    report = Field(ReportType, id=Argument(ID, required=True))

    def resolve_reports(root, info, **kwargs):
        return Report.objects.all()

    def resolve_report(root, info, **kwargs):
        return Report.objects.get(id=kwargs.get('id'))

schema = Schema(query=Query)
