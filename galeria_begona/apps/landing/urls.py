# !/usr/bin/python
# -*- coding: utf-8 -*-


from django.conf.urls import url

from . import views

urlpatterns = [

    url(regex=r'^$',
        view=views.HomepageTemplateView.as_view(),
        name='homepage'),

    url(regex=r'^nosotros/$',
        view=views.AboutTemplateView.as_view(),
        name='about'),

    url(regex=r'^galeria/$',
        view=views.GalleryTemplateView.as_view(),
        name='gallery'),

    url(regex=r'^faq/$',
        view=views.FAQTemplateView.as_view(),
        name='faq'),

    url(regex=r'^contacto/$',
        view=views.ContactTemplateView.as_view(),
        name='contact'),

    url(regex=r'^productos/$',
        view=views.ProductsTemplateView.as_view(),
        name='products'),

    url(regex=r'^pedido-bota/$',
        view=views.BootTemplateView.as_view(),
        name='boot'),

    url(regex=r'^pedido-botin/$',
        view=views.BootyTemplateView.as_view(),
        name='booty'),

    url(regex=r'^pedido-chaparrera/$',
        view=views.ChapsTemplateView.as_view(),
        name='chaps'),

]