import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from './compte';

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

}
