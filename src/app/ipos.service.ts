import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({  
  providedIn: 'root'  
})  
  
export class IposService {  
  
  private baseUrl = 'http://localhost:8082/ipo/ipos';  
  
  constructor(private http:HttpClient) { }  
  
  getAllipos(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllipos');  
  }  
  
  createIpos(ipos: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveIpos', ipos);  
  }  
  
  deleteIpos(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteIpos/${id}`, { responseType: 'text' });  
  }  
  
  getIpos(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll3/${id}`);  
  }  
  
  updateIpos(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateIpos/${id}`, value);  
  }  
    
}  
