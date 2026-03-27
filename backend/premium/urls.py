from django.urls import path
from . import views

urlpatterns = [
    path('calculate/', views.calculate_premium, name='calculate_premium'),
]
