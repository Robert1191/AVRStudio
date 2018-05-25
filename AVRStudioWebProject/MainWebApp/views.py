# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request,"MainWebApp/index.html")

def about(request):
    return render(request,"MainWebApp/about.html")

def contact(request):
    return render(request,"MainWebApp/contact.html")

def details(request):
    return render(request,"MainWebApp/details.html")

def projects(request):
    return render(request,"MainWebApp/projects.html")
