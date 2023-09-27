# Generated by Django 3.2.7 on 2021-09-27 23:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_first_name', models.CharField(max_length=30)),
                ('order_last_name', models.CharField(max_length=30)),
                ('order_email', models.CharField(max_length=50)),
                ('order_wallet_address', models.CharField(max_length=128)),
                ('order_street_address', models.CharField(blank=True, default='street address', max_length=100)),
                ('order_city_address', models.CharField(blank=True, default='city address', max_length=100)),
                ('order_region_address', models.CharField(blank=True, default='region address', max_length=100)),
                ('order_postal_address', models.CharField(blank=True, default='postal address', max_length=100)),
                ('order_country_address', models.CharField(blank=True, default='country address', max_length=100)),
                ('order_notes', models.CharField(blank=True, default='notes', max_length=256, null=True)),
                ('order_start', models.DateTimeField(verbose_name='date published')),
                ('order_end', models.DateTimeField(blank=True, default=None, null=True)),
                ('order_price', models.CharField(max_length=10)),
                ('order_paid', models.CharField(max_length=20)),
                ('order_status', models.CharField(blank=True, default='incomplete', max_length=20)),
                ('wallet_balance', models.CharField(blank=True, default='0', max_length=128, null=True)),
            ],
        ),
    ]
