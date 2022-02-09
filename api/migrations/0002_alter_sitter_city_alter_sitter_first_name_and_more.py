# Generated by Django 4.0.1 on 2022-02-09 06:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sitter',
            name='city',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='sitter',
            name='first_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='sitter',
            name='last_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='sitter',
            name='zipcode',
            field=models.CharField(max_length=5),
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msg_content', models.CharField(max_length=500)),
                ('pet_owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('sitter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.sitter')),
            ],
        ),
    ]
