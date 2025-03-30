from rest_framework import viewsets,generics
from rest_framework.response import Response
from .models import Product,Category
from .serializers import ProductSerializer,CategorySerializer

class ProductListAPIView(generics.ListAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class CategoryListAPIView(generics.ListAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    lookup_field='id'

class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
    lookup_field='id'


class CategoryProductsAPIView(generics.ListAPIView):
    serializer_class=ProductSerializer

    def get_queryset(self):
        category_id=self.kwargs.get('id')
        return Product.objects.filter(category_id=category_id)

