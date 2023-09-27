from django.urls import include, path
from . import views

app_name = 'eshop'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('page1/', views.Page1.as_view(), name='page1'),
    path('page2/', views.page2, name='page2'),
    path('page3/', views.Page3.as_view(), name='page3'),
]
