from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.MyCreatorTokenView.as_view(), name='token-obtain-pair'),
    path('profile/', views.UserProfile, name='user-profile'),
    path('register/', views.UserRegister, name='user-register'),
]
