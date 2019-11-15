from graphene import Argument, Field, ID, ObjectType, Schema
from graphene_django import DjangoConnectionField
from .models import Report
from .types import ReportType
from .mutations import ReportCreate, ReportDelete

class Query(ObjectType):
    reports = DjangoConnectionField(ReportType)
    report = Field(ReportType, id=Argument(ID, required=True))

    # pylint: disable=E0213
    def resolve_reports(root, info, **kwargs):
        return Report.objects.all()

    # pylint: disable=E0213
    def resolve_report(root, info, **kwargs):
        return Report.objects.get(id=kwargs.get('id'))

class Mutation(ObjectType):
    report_create = ReportCreate.Field()
    report_delete = ReportDelete.Field()

schema = Schema(query=Query, mutation=Mutation)
