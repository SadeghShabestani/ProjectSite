from django.contrib import admin
from django.urls import path, include

urls = [
    path('users/', include('base.urls.user_urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(urls)),
]
