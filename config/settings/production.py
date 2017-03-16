#!/usr/bin/env python
# -*- coding: utf-8 -*-

from .base import *

# DEBUG
# -----------------------------------------------------------------------------
DEBUG = env.bool('DJANGO_DEBUG', default=False)
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG

SECRET_KEY = env("DJANGO_SECRET_KEY", default='CHANGEME!!!')

# SITE CONFIGURATION
# -----------------------------------------------------------------------------
ALLOWED_HOSTS = [".begonafernandez.com.mx"]


STATIC_URL = '/static/'
STATIC_ROOT = str(PROJECT_DIR('staticfiles'))

MEDIA_URL = '/media/'
MEDIA_ROOT = str(PROJECT_DIR('media'))