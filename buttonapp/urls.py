from django.urls import path
from . import views

urlpatterns = [
    path('', views.button_view, name='button_view'),
]