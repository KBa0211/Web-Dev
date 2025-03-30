
from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price', 'count', 'is_active', 'get_category']
    list_filter = ['is_active']
    search_fields = ['name', 'description']
    
    def get_category(self, obj):
        return obj.category.name
    
    get_category.short_description = 'Category'