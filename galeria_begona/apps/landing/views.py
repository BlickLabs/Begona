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

def get_product_context_data(self, classView, defaultProduct, defaultPrice, **kwargs):
    ctx = super(classView, self).get_context_data(**kwargs)
    ctx['product'] = self.request.GET.get('producto', defaultProduct)
    ctx['color'] = self.request.GET.get('color', 'Negro')
    ctx['price'] = int(self.request.GET.get('precio', defaultPrice))
    return ctx

class BootTemplateView(TemplateView):
    template_name = 'landing/pedido-bota.html'

    def get_context_data(self, **kwargs):
        return get_product_context_data(self, BootTemplateView, 'Bota clásica', 4800, **kwargs)

class BootyTemplateView(TemplateView):
    template_name = 'landing/pedido-botin.html'

    def get_context_data(self, **kwargs):
        return get_product_context_data(self, BootyTemplateView, 'Botín clásico', 2400, **kwargs)

class ChapsTemplateView(TemplateView):
    template_name = 'landing/pedido-chaparrera.html'

    def get_context_data(self, **kwargs):
        return get_product_context_data(self, ChapsTemplateView, 'Chaparrera 1', 6042, **kwargs)