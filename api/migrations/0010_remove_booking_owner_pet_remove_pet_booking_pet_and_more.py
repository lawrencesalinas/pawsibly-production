# Generated by Django 4.0.1 on 2022-01-10 21:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_pet_pet_sitter'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='booking',
            name='owner_pet',
        ),
        migrations.RemoveField(
            model_name='pet',
            name='booking_pet',
        ),
        migrations.AddField(
            model_name='booking',
            name='owner_of_pet',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='booking',
            name='sitter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_booking', to=settings.AUTH_USER_MODEL),
        ),
    ]