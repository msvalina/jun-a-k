from graphene import Argument, Field, ID, ObjectType, Schema
from graphene import Connection, ConnectionField, Node, Int
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django import DjangoObjectType
from .models import Report
from .filters import ReportFilter
from .mutations import ReportCreate, ReportDelete
from .types import ReportType

class Report_Node_Type(DjangoObjectType):
    class Meta:
        model = Report
        interfaces = (Node, )

class Report_Connection(Connection):
    class Meta:
        node = Report_Node_Type
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
