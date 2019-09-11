import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from './compte';
import { FormGroup, Validators, FormControl }  from '@angular/forms';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte:Compte[]

  constructor(private comptService:CompteService) { }

  ngOnInit() {
    this.getCompte();
  }
  getCompte()
  {
    this.comptService.getCompte()
    .subscribe( res=>
      {
        this.compte=res;
      },
      err=>{
        console.log(err)
      }
    )

     
    
        
   
     
  }


  moneyForm= new FormGroup({
    ninea:new FormControl('',Validators.required)
  })
  onSubmitmoney(){}
  recherche(){
    this.comptService.recherche(this.moneyForm.value)
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
