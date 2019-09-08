import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { FormGroup, Validators, FormControl }  from '@angular/forms';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  depotUserData ={}

  constructor(private _Auth:AuthService) { }

  ngOnInit() {
  }

  depot= new FormGroup({
    montants : new FormControl('',[Validators.required,Validators.min(75000)]),
    numerocompte : new FormControl('',Validators.required),
    compte : new FormControl('',Validators.required),
    user : new FormControl('',Validators.required),
  });


  Onsubmitdepot(){}
  Onsubmit(){
    console.log(this.depot.value)
    this._Auth.depotUrl(this.depot.value)

       .subscribe(
          res=>console.log(res),
          err=>console.log(err)
       )
  }

}
