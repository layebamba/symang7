import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngprog';

  constructor(private _auth: AuthService){}

  ngOnInit():void {
    this._auth.loadToken()
  
  }

  isSUPER_ADMIN()
  {
    return this._auth.isSUPER_ADMIN();
  }
  isPARTENAIRE()
  {
    return this._auth.isPARTENAIRE();
  }
  isADMIN()
  {
    return this._auth.isADMIN();
  }
  
  isCAISSIER()
  {
    return this._auth.isCAISSIER();
  }
  isUser()
  {
    return this._auth.isUSER();
  }
  isAuthenticated(){
    return this._auth.isAuthenticated();

  }

  logOut(){
    this._auth.logout();
  }

 

 
}
