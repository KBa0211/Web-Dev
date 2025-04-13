import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000/api';

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getCompany(id: number): Observable<Company>{
    return  this.client.get<Company>(`${this.BASE_URL}/companies/${id}/`)
  }
}
