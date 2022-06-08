from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


# class UserSerializer(serializers.Serializer):
#     name = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'name']

#     def get_name(self, obj):
#         name = obj.first_name
#         if name == "":
#             name = obj.email
#         return name


# class UserSerializerWithToken(UserSerializer):
#     token = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'name', 'token']

#     def get_token(self, obj):
#         token = RefreshToken.for_user(obj)
#         return str(token.access_token)

class UserSerializer(serializers.Serializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


class UserRegisterSerializer(serializers.ModelSerializer):
    passwordConfirm = serializers.CharField(required=True, write_only=True)
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ('username', 'email',
                  'password', 'passwordConfirm', 'token')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    def create(self, validated_data):
        del validated_data['passwordConfirm']
        return User.objects.create_user(**validated_data)
