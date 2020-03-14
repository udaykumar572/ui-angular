import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({

  providedIn: 'root'

})

export class SectorService {

  private baseUrl = 'http://localhost:8082/sector/CompanySectors/';
  constructor(private http: HttpClient) { }
  getAllSectors(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + 'getAllSectors');

  }
createSector(sector: object): Observable<object> {

    return this.http.post(`${this.baseUrl}` + 'saveSector', sector);

  }
  deleteSector(sectorid: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/deleteSector/${sectorid}`, { responseType: 'text' });

  }
  getSector(sectorid: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/findOneInAll4/${sectorid}`);

  }
  updateSector(sectorid: number, value: any): Observable<Object> {

    return this.http.put(`${this.baseUrl}/updateSector/${sectorid}`, value);

  }
  
getmultiplelinechart(): Observable<any> {

 return this.http.get(`${this.baseUrl}`+'multiplelinechart');

 }



}

