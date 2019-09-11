import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Compte } from './compte/compte';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  private Urlcomptes = "http://127.0.0.1:8000/money";

  constructor(private http:HttpClient) { }
  



  getCompte():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.Urlcomptes)
  
  }


private Urlmoney="http://127.0.0.1:8000/api/ajout";
recherche(compte){
  return this.http.post<any>(this.Urlmoney,compte,{headers:this.headers,observe:'response'});
}

}
