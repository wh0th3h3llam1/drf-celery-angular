from rest_framework.views import APIView
from rest_framework.response import Response

from .tasks import task

# Create your views here.


class InvokeTaskView(APIView):
    def get(self, request, *args, **kwargs):
        # task.delay()
        task.apply_async(countdown=3)
        # task.apply_async(eta=3)

        return Response(data={"message": "Created a Task"})
