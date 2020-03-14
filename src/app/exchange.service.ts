import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {  
  
  private baseUrl = 'http://localhost:8082/manageexchange/exchange/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllexchanges(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllexchanges');  
  }  
  
  createExchange(exchange: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveManageExchange', exchange);  
  }  
  
  deleteManageExchange(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteManageExchange/${id}`, { responseType: 'text' });  
  }  
  
  getExchange (id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll4/${id}`);  
  }  
  
  updateExchange(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateManageExchange/${id}`, value);  
  }  
    
}  
