import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from '../../models/interfaces';
import {CompanyService} from '../../services/company.service';
import {VacancyService} from '../../services/vacancy.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-companies',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService,
              private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onCompanyClick(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.vacancyService.getVacanciesByCompany(companyId).subscribe(data => {
      this.vacancies = data
    });
  }

}
