from django.db.models import Q
import django_filters
from reports.models import Report

class ReportFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method='filter_search')
    class Meta:
        model = Report
        fields = ()
    def filter_search(self, queryset, name, value):
        return queryset.filter(
            Q(location__icontains=value) | Q(description__icontains=value)
        )