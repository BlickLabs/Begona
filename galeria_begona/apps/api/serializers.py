#!/usr/bin/env python
# -*- coding: utf-8 -*-

from rest_framework import serializers

from galeria_begona.apps.images.models import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('title', 'image', 'date',)
