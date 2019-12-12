from graphene import Argument, Field, ID, ObjectType, Schema
from graphene import Connection, ConnectionField, Node, Int, String
from graphene import Enum
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django import DjangoObjectType
from .models import Report, Status
from .filters import ReportFilter
from .mutations import ReportCreate, ReportDelete, StatusEnum
from .types import ReportType

class ReportConnection(Connection):
    class Meta:
        node = ReportType
    count = Int()

    # pylint: disable=no-self-argument
    def resolve_count(root, info):
        # pylint: disable=no-member
        return len(root.edges)

class Query(ObjectType):
    reports = DjangoFilterConnectionField(ReportType, filterset_class=ReportFilter)
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
