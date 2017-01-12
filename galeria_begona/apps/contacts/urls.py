# !/usr/bin/python
# -*- coding: utf-8 -*-


from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^contact/$',
        view=views.ContactView.as_view(),
        name='contact'),

    url(regex=r'^boot/$',
        view=views.BootRequestView.as_view(),
        name='boot'),

    url(regex=r'^booty/$',
        view=views.BootyRequest.as_view(),
        name='booty'),

    url(regex=r'^chaps/$',
        view=views.ChapsRequest.as_view(),
        name='chaps'),

]