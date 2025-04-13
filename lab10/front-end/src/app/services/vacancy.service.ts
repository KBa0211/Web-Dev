import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company, Vacancy} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000/api';

  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}/`)
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`)
  }

  getTopTenVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`)
  }

}
