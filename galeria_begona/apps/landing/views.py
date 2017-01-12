#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.views.generic import TemplateView

class HomepageTemplateView(TemplateView):
    template_name = 'landing/index.html'

class AboutTemplateView(TemplateView):
    template_name = 'landing/about.html'

class GalleryTemplateView(TemplateView):
    template_name = 'landing/galeria.html'

class HomepageTemplateView(TemplateView):
    template_name = 'landing/index.html'

class FAQTemplateView(TemplateView):
    template_name = 'landing/faq.html'

class ContactTemplateView(TemplateView):
    template_name = 'landing/contacto.html'

class ProductsTemplateView(TemplateView):
    template_name = 'landing/products.html'

class BootTemplateView(TemplateView):
    template_name = 'landing/pedido-bota.html'

class BootyTemplateView(TemplateView):
    template_name = 'landing/pedido-botin.html'

class ChapsTemplateView(TemplateView):
    template_name = 'landing/pedido-chaparrera.html'