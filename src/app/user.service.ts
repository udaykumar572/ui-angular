
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {  
  
  private baseUrl = 'http://localhost:8082/user/UserPortal/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllUsers(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllUsers');  
  }  
  
  createUser(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveUser', user);  
  }  
  
  deleteUser(username: String): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteUser/${username}`, { responseType: 'text' });  
  }  
  
  getUser (username: String): Observable<any> {  
    return this.http.get(`${this.baseUrl}findOneInAll6/${username}`);  
  }  
  
  updateUser(username: String, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}updateUser/${username}`, value);  
  } 
  findByUsernameAndPassword(username: String,password: String): Observable<any> {



    return this.http.get(this.baseUrl+'findByUsernameAndPassword/'+username+'/'+password);
  
  
  
    }
  
   
    
}  
