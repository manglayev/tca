from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.views import View, generic
from django.views.generic.base import TemplateView

class IndexView(generic.ListView):
    template_name = 'eshop/index.html'
    def get_queryset(self):
        return HttpResponse("Hello, world. You're at the eshop index")

class Page1(generic.ListView):
    template_name = 'eshop/page1.html'
    def get_queryset(self):
        return HttpResponse("Hello, world. You're at the eshop page1")

class Page3(generic.ListView):
    template_name = 'eshop/page3.html'
    def get_queryset(self):
        return HttpResponse("Hello, world. You're at the eshop page3")

def page2(request):
    if request.method == 'POST':
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        email = request.POST.get('email')
        walletAddress = request.POST.get('walletAddress')
        streetAddress = request.POST.get('streetAddress1')
        Rs = "firstName = " + firstName + "; lastName = "+lastName+"; email = "+email
        Rs = Rs + "; walletAddress = " + walletAddress + "; streetAddress1 " + streetAddress

        print(Rs)
        return HttpResponseRedirect(reverse('eshop:page3'))
