from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_worker, name='register_worker'),
    path('list/', views.get_workers, name='get_workers'),
]
