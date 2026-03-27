from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Worker
from .serializers import WorkerSerializer

@api_view(['POST'])
def register_worker(request):
    serializer = WorkerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Worker registered successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_workers(request):
    workers = Worker.objects.all()
    serializer = WorkerSerializer(workers, many=True)
    return Response(serializer.data)
