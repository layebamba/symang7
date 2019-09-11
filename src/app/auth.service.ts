import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { parse } from 'path';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { Transaction } from './transaction/transaction';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  private _transUrl= "http://127.0.0.1:8000/api/transfert";
  private _depotUrl= "http://127.0.0.1:8000/depot";
  private _registerUrl = "http://127.0.0.1:8000/register";
  private _loginUrl = "http://127.0.0.1:8000/api/login_check";
  //debut

 
  //fin
  jwt:string;
  username:string;
  roles:any;
  constructor(private http: HttpClient,
    private _router:Router ) { }
  getcomments():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/listeruser")

  }    
  
  Ok(transfert){
    return this.http.post<any>(this._transUrl,transfert,{headers:this.headers,observe:'response'})
  }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user,{headers:this.headers,observe:'response'})
  }
  loginUrl(data){
    return this.http.post<any>(this._loginUrl,data,{headers:this.headers,observe:'response'})
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
 
 saveToken(jwt:string)
  {

    localStorage.setItem('token',jwt);
 
  
  //localStorage.setItem('roles',[])
 this.jwt=jwt;
  this.parseJWT();
}
 
  parseJWT(){
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    
    this.username= objJWT.username;
    localStorage.setItem('username',this.username)
    
    
    
    this.roles=objJWT.roles;
    localStorage.setItem('roles',this.roles)
    
 }
isSUPER_ADMIN(){
  return this.roles.indexOf('SUPER_ADMIN')>=0;
}
isPARTENAIRE()
{
  return this.roles.indexOf('PARTENAIRE')>=0;
}

isADMIN()
{
  return this.roles.indexOf('ROLE_ADMIN')>=0;
}
isCAISSIER()
{
  return this.roles.indexOf('ROLE_CAISSIER')>=0;
}
isUSER()
{
  return this.roles.indexOf('ROLE_USER')>=0;
}
isAuthenticated()
{
  return this.roles && (this.isADMIN()|| this.isPARTENAIRE());
}

loadToken(){
  this.jwt=localStorage.getItem('token');
//  this.user=localStorage.getItem('username');
//  this.jwt=localStorage.getItem('roles');
  this.parseJWT();
}
logout(){
  localStorage.removeItem('token')
this._router.navigate(["/"]);

  this.initParams();

}
initParams(){
  this.jwt=undefined;                                    
  this.username=undefined;
  this.roles=undefined;
}


postFile( user,fileToUpload: File) {
    
  const endpoint = 'http://localhost:8000/register';
  const formData: FormData = new FormData();
  formData.append('nomAgence',user.nomAgence);
  // formData.append('ninea',user.ninea);
  // formData.append('registre',user.registre);
  formData.append('lieu',user.lieu);
  formData.append('phone',user.phone);
  formData.append('isActive',user.isActive);
  formData.append('username',user.username);
  formData.append('profil',user.profil);   
                                                                                         
  formData.append('password', user.password);
  formData.append('nom',user.nom);
  formData.append('prenom',user.prenom);
  formData.append('adresse',user.adresse);
  formData.append('telephone',user.telephone);
  formData.append('status',user.status);
 //formData.append('bloquer',user.bloquer);
 //formData.append('debloquer',user.debloquer);


  formData.append('imageFile', fileToUpload, fileToUpload.name);
  
                                                                                                                                                                                     

return this.http
  .post(endpoint, formData,{headers:this.headers,observe:'response'});
}
depotUrl(depot){
 return this.http.post<any>(this._depotUrl,depot,{headers:this.headers,observe:'response'})
}
private urltransac = "http://127.0.0.1:8000/transac";

gettransaction():Observable<Transaction[]>
{
  return this.http.get<Transaction[]>(this.urltransac)


}


 private Urlretrait="http://127.0.0.1:8000/api/retrait";

 ok(retrait)
 {
   return this.http.post<any>(this.Urlretrait,retrait,{headers:this.headers,observe:'response'})
 }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     