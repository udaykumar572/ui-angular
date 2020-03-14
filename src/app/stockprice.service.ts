import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private baseUrl = 'http://localhost:8082/stockprice/stockprice/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllstockprices(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllstockprices');  
  }  
  
  saveStockPrice(stockprice: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveStockPrice', stockprice);  
  }  
  
  deleteStockprice(stockexchange: String): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteStockprice/${stockexchange}`, { responseType: 'text' });  
  }  
  
  getStockprice(stockexchange: String): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll/${stockexchange}`);  
  }  
  
  updateStockPrice(stockexchange: String, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateStockPrice/${stockexchange}`, value);  
  }  
  
getmultiplelinechart(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'multiplelinechart');
 
  }
  
 uploadFile(file: File, stockexchange: String): Observable<any> {

  let url = this.baseUrl + "uploadfile/" + stockexchange;
 
  const formdata: FormData = new FormData();
 
  formdata.append('file', file);
 
  return this.http.post(url, formdata);
 
  }
 
 
    
}  

