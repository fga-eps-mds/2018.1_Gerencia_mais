from django.test import TestCase
from user.views import CreateUserAPI
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

class TestUser(TestCase):
    def test_password_is_equal(self):
        client = APIClient()
        url = reverse('create-user')
        data = {'username':'guilherme','password':'guilherme123','email': 'gui@gmail.com'}
        response = self.client.post(url, data, format='json')
        self.assertNotEqual(User.objects.get().password, 'guilherme123')

# class AccountTests(APITestCase):
#     def test_create_account(self):
#         """
#         Ensure we can create a new account object.
#         """
#         url = reverse('create-user')
#         data = {'name': 'DabApps'}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#
#         self.assertEqual(Account.objects.get().name, 'DabApps')
