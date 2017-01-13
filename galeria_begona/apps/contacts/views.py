#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.conf import settings
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View
from galeria_begona.core.utils import send_email


class ContactView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ContactView, self) \
            .dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        name = request.POST.get('name')
        email = request.POST.get('email')
        address = request.POST.get('address')
        message = request.POST.get('message')

        ctx = {
            'name': name,
            'email': email,
            'address': address,
            'message': message
        }
        try:
            send_email(
                subject='email/subjects/contact.txt',
                body='email/contact.html',
                to_email=[settings.DEFAULT_EMAIL_TO],
                context=ctx
            )

            return HttpResponse('1')
        except:
            return HttpResponse('0')


class BootRequestView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(BootRequestView, self) \
            .dispatch(request, *args, **kwargs)

    def post(self, request):
        leg_circ_12 = request.POST.get('leg_circ_12')
        leg_circ_16 = request.POST.get('leg_circ_16')
        leg_circ_20 = request.POST.get('leg_circ_20')
        leg_circ_24 = request.POST.get('leg_circ_24')
        leg_circ_28 = request.POST.get('leg_circ_28')
        leg_circ_32 = request.POST.get('leg_circ_32')
        leg_circ_36 = request.POST.get('leg_circ_36')
        leg_circ_40 = request.POST.get('leg_circ_40')
        leg_circ_44 = request.POST.get('leg_circ_44')
        finger_circ = request.POST.get('finger_circ')
        bone_finger_circ = request.POST.get('bone_finger_circ')
        instep_circ = request.POST.get('instep_circ')
        circ_heel_to_foot = request.POST.get('circ_heel_to_foot')
        circ_tip_to_hell = request.POST.get('circ_tip_to_hell')
        name = request.POST.get('name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        model = request.POST.get('model')
        number = request.POST.get('number')
        color = request.POST.get('color')
        element = request.POST.get('element')
        description = request.POST.get('description')
        street_col = request.POST.get('street_col')
        state = request.POST.get('state')
        cp = request.POST.get('cp')

        ctx = {
            'leg_circ_12' : leg_circ_12,
            'leg_circ_16' : leg_circ_16,
            'leg_circ_20' : leg_circ_20,
            'leg_circ_24' : leg_circ_24,
            'leg_circ_28' : leg_circ_28,
            'leg_circ_32' : leg_circ_32,
            'leg_circ_36' : leg_circ_36,
            'leg_circ_40' : leg_circ_40,
            'leg_circ_44' : leg_circ_44,
            'finger_circ' : finger_circ,
            'bone_finger_circ' : bone_finger_circ,
            'instep_circ' : instep_circ,
            'circ_heel_to_foot' : circ_heel_to_foot,
            'circ_tip_to_hell' : circ_tip_to_hell,
            'name' : name,
            'last_name' : last_name,
            'email' : email,
            'number' : number,
            'model' : model,
            'color' : color,
            'element' : element,
            'description' : description,
            'street_col' : street_col,
            'state' : state,
            'cp' : cp,
        }

        try:
            send_email(
                subject='email/subjects/boot_request.txt',
                body='email/boot_request.html',
                to_email=[settings.DEFAULT_EMAIL_TO],
                context=ctx
            )

            return HttpResponse('1')
        except:
            return HttpResponse('0')


class BootyRequest(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(BootyRequest, self) \
            .dispatch(request, *args, **kwargs)

    def post(self, request):
        name = request.POST.get('name')
        last_name = request.POST.get('last_name')
        street_col = request.POST.get('street_col')
        state = request.POST.get('state')
        cp = request.POST.get('cp')
        email = request.POST.get('email')
        model = request.POST.get('model')
        number = request.POST.get('number')
        color = request.POST.get('color')
        element = request.POST.get('element')

        ctx = {
            'name': name,
            'last_name': last_name,
            'street_col': street_col,
            'state': state,
            'cp': cp,
            'email': email,
            'number': number,
            'model': model,
            'color': color,
            'element': element,
        }

        try:
            send_email(
                subject='email/subjects/bootie_request.txt',
                body='email/bootie_request.html',
                to_email=[settings.DEFAULT_EMAIL_TO],
                context=ctx
            )

            return HttpResponse('1')
        except:
            return HttpResponse('0')


class ChapsRequest(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ChapsRequest, self) \
            .dispatch(request, *args, **kwargs)

    def post(self, request):
        hip_circ = request.POST.get('hip_circ')
        high_circ = request.POST.get('high_circ')
        med_circ = request.POST.get('med_circ')
        down_circ = request.POST.get('down_circ')
        calf_circ = request.POST.get('calf_circ')
        circ_27 = request.POST.get('circ_27')
        circ_22 = request.POST.get('circ_22')
        circ_17 = request.POST.get('circ_17')
        circ_12 = request.POST.get('circ_12')
        mouth_circ = request.POST.get('mouth_circ')
        name = request.POST.get('name')
        model = request.POST.get('model')
        last_name = request.POST.get('last_name')
        street_col = request.POST.get('street_col')
        state = request.POST.get('state')
        cp = request.POST.get('cp')
        email = request.POST.get('email')
        number = request.POST.get('number')
        color = request.POST.get('color')
        with_initials = request.POST.get('with_initials')
        initials = request.POST.get('initials')

        ctx = {
            'hip_circ': hip_circ,
            'high_circ': high_circ,
            'med_circ': med_circ,
            'down_circ': down_circ,
            'calf_circ': calf_circ,
            'circ_27': circ_27,
            'circ_22': circ_22,
            'circ_17': circ_17,
            'circ_12': circ_12,
            'mouth_circ': mouth_circ,
            'name': name,
            'last_name': last_name,
            'street_col': street_col,
            'state': state,
            'cp': cp,
            'email': email,
            'number': number,
            'model': model,
            'color': color,
            'with_initials': with_initials,
            'initials': initials,
        }

        try:
            send_email(
                subject='email/subjects/short_request.txt',
                body='email/short_request.html',
                to_email=[settings.DEFAULT_EMAIL_TO],
                context=ctx
            )

            return HttpResponse('1')
        except:
            return HttpResponse('0')