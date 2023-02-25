from django.urls import path

from .views import InvokeTaskView


urlpatterns = [
    path("tasks", view=InvokeTaskView.as_view())
]
