import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl }  from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  constructor(private _Auth:AuthService) { }
  submitted=false;

  ngOnInit() {

  
   
  }

get f(){
  return this.retraitForm.controls;
}

  retraitForm=new FormGroup({
    codenvoi:new FormControl('',Validators.required)
  })
  onSubmitretirer(){}
ok(){
  console.log(this.retraitForm.value)
  this._Auth.ok(this.retraitForm.value)
  .subscribe(
    res=>{
      console.log(res)
    },
    err=>{
      console.log(err)
    }
  )
}
}
