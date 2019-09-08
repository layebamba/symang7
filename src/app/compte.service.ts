import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from './compte/compte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private Urlcomptes = "http://127.0.0.1:8000/money";

  constructor(private http:HttpClient) { }



  getCompte():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.Urlcomptes)
  
  }




}
