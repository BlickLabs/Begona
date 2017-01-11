#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib import admin
from . import models


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'preview', 'date')
    ordering = ('-date',)

