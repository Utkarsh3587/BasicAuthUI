import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl: string = environment.apiURL;
    private headers: any;

    constructor(private http: HttpClient) {
        this.headers = { headers: new HttpHeaders(
          { 'Content-Type': 'application/json'}) };
    }

    getTenCrops(): Observable<any>{
      return this.http.get<any>(this.apiUrl + 'crops/').pipe();
    }

    searchCrops(cropName: string): Observable<any>{
      return this.http.get<any>(this.apiUrl + `crops/?search=${cropName}`).pipe();
    }

    login(userData: any): Observable<any>{
      return this.http.post<any>(this.apiUrl + 'users/login/', userData, this.headers).pipe();
    }

    register(userData: any): Observable<any>{
      return this.http.post<any>(this.apiUrl + 'users/register/', userData, this.headers).pipe();
    }
}
