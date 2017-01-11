#!/usr/bin/env python
# -*- coding: utf-8 -*

from django.contrib.auth.models import User
from django.db import models

class Image(models.Model):
    title = models.CharField(
        verbose_name='Titulo',
        blank=True,
        null=True,
        max_length=100,
    )
    image = models.ImageField(
        verbose_name='Imagenn',
        blank=False,
        null=False,
    )

    date = models.DateTimeField(
        verbose_name='Fecha',
        auto_now_add=True,
    )

    def preview(self):
        return """
        <img src="%s" width="300px" />
        """ % self.image.url

    preview.allow_tags = True

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = "Imagen"
        verbose_name_plural = "Imagenes"

