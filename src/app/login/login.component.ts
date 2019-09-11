import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }
  loginUser(){
console.log(this.loginUserData)
    this._auth.loginUrl(this.loginUserData)
    .subscribe(
        res=>{
     // console.log(res.headers.get('Authorization'))
        let jwt=res.body["token"]
      // let jwt=res.headers.get('Authorization')
        this._auth.saveToken(jwt)
       // this._auth.saveUsername(username);
  
        

       // this._auth.saveUsername(username),
       // localStorage.setItem('token',res.token)
       
        
        this._router.navigate(['/'])

       
      },
      err => console.log(err)

    )

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
  isUSER()
  {
    return this._auth.isUSER();
  }

 

}
