import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormControl }  from '@angular/forms';
import { Transaction } from './transaction';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:Transaction[];
 
 transactionUserData={}

  constructor( private _Auth: AuthService) { }

  ngOnInit() {

  this.gettransaction()

  }
  ataya= new FormGroup({
    nomexp: new FormControl('',Validators.required),
    prenomexp: new FormControl('',Validators.required),
    telexp: new FormControl('',Validators.required),
    nomrecep: new FormControl('',Validators.required),
    prenomrecep: new FormControl('',Validators.required),
    telrecep: new FormControl('',Validators.required),
    mtntenvoi: new FormControl('',[Validators.required,Validators.min(500)]),
    etat: new FormControl('',Validators.required),
  });
  Onsubmitataya(){}
  Ok(){
   console.log(this.ataya.value)
      this._Auth.Ok(this.ataya.value)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }


  gettransaction()
  {
    this._Auth.gettransaction()
    .subscribe(
      res=>{
        this.transaction=res
      },
      err=>{
        console.log(err)
      }
    )
  }

}
