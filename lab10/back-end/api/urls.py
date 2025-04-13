from django.urls import path

from .cbv import CompanyListAPIView, CompanyDetailAPIView, VacanciesByCompanyAPIView, VacancyListAPIView, \
    VacancyDetailAPIView, TopVacanciesAPIView

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view(), name='company-list'),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', VacanciesByCompanyAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:vacancy_id>/', VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopVacanciesAPIView.as_view(), name='top-vacancies'),
]
