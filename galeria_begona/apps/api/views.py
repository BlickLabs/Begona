#!/usr/bin/env python
# -*- coding: utf-8 -*-
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination

from galeria_begona.apps.api.serializers import ImageSerializer
from galeria_begona.apps.images.models import Image


class ImageList(generics.ListCreateAPIView):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()
