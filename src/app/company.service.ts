

import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class CompanyService {  
  
  private baseUrl = 'http://localhost:8082/company/company';  
  
  constructor(private http:HttpClient) { }  
  
  getAllCompanies(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllCompanies');  
  }  
  
  createCompany(company: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveCompany', company);  
  }  
  
  deleteCompany(companyname: String): Observable<object> {  
    return this.http.delete(`${this.baseUrl}/deleteCompany/${companyname}`) ; 
  }  
  
  getCompany (companyname: String): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll1/${companyname}`);  
  }  
  
  updateCompany(companyname: String, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateCompany/${companyname}`, value);  
  }  
    
}  
