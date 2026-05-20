from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def test(request):
    return render(request,"base.html")

def test_loader(request):
    template=loader.get_template('base.html')
    return HttpResponse(template.render())