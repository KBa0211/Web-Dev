from django.urls import path 
from .views import (
    ProductListAPIView,
    CategoryListAPIView,
    ProductDetailAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns=[
path('products/',ProductListAPIView.as_view(),name='product-list'),
path('products/<int:id>/', ProductDetailAPIView.as_view(), name='product-detail'),
path('categories/',CategoryListAPIView.as_view(),name='category-list'),
path('categories/<int:id>/',CategoryDetailAPIView.as_view(),name='category-detail'),
path('categories/<int:id>/products/',CategoryProductsAPIView.as_view(),name='cateogry-products')
]