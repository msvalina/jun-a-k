# Generated by Django 2.2.7 on 2019-11-14 09:53

from django.db import migrations, models
import reports.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ReportModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now=True, verbose_name='Created at')),
                ('created_at_img', models.DateTimeField(verbose_name='Image created at')),
                ('image', models.ImageField(blank=True, null=True, upload_to=reports.models.image_direcotry_path_uuid)),
                ('description', models.CharField(max_length=500)),
                ('lon', models.DecimalField(decimal_places=6, max_digits=9)),
                ('lat', models.DecimalField(decimal_places=6, max_digits=9)),
            ],
            options={
                'verbose_name': 'Report',
                'verbose_name_plural': 'Reports',
                'db_table': '',
                'ordering': ('-created_at',),
                'managed': True,
            },
        ),
    ]