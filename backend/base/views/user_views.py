from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from base.serializer import UserSerializer, UserRegisterSerializer


class MyCreatorTokenSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserRegisterSerializer(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data


class MyCreatorTokenView(TokenObtainPairView):
    serializer_class = MyCreatorTokenSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def UserRegister(request):
    data = request.data
    user = User.objects.create(
        username=data['username'],
        email=data['email'],
        password=make_password(data['password']),
    )
    serializer = UserRegisterSerializer(user, many=False),
    return Response(serializer.data)
