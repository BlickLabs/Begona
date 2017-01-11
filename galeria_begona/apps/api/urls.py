# !/usr/bin/python
# -*- coding: utf-8 -*-


from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^images/$',
        view=views.ImageList.as_view(),
        name='api_image_list'),

]