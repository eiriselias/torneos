import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  
  private apiurl: string = apiServer.apiUrl;

  constructor(private http:HttpClient) { 
  }

  cargar(){
    return this.http.get(`${this.apiurl}`);
  }
  
  
}
