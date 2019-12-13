import base64
from django.core.files.base import ContentFile
from graphene import Boolean, Field, ID, String, DateTime, Float, Enum
from graphene import InputObjectType, Mutation
from rest_framework import serializers
from django_enum_choices.serializers import EnumChoiceField
from .models import Report, Status
from .types import ReportType

class ReportSerializer(serializers.ModelSerializer):
    status = EnumChoiceField(Status)
    class Meta:
        model = Report
        fields = (
            'id',
            'created_at',
            'image',
            'description',
            'location',
            'lon',
            'lat',
            'status',
        )


StatusEnum = Enum.from_enum(Status)

class ReportInputType(InputObjectType):
    #created_at = DateTime()
    description = String()
    image = String()
    location = String()
    lon = Float()
    lat = Float()
    status = StatusEnum()

class ReportCreate(Mutation):
    class Arguments:
        input = ReportInputType(required=True)
    report = Field(ReportType)

    @classmethod
    def mutate(cls, root, info, **data):
        decoded_image = base64_file(data['input']['image'], "foobar")
        data['input'].pop("image", None)
        data['input']['image'] = decoded_image
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

def base64_file(data, name=None):
    # TODO: This should be regex validation
    if data == None:
        return None
    if not ';base64,' or not 'data:' in data:
        return None
    _format, _img_str = data.split(';base64,')
    _name, ext = _format.split('/')
    if not name:
        name = _name.split(":")[-1]
    return ContentFile(base64.b64decode(_img_str), name='{}.{}'.format(name, ext))
