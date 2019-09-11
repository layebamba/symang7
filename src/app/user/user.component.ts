import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:User[]
blockData={
  username:null,
  
}
  constructor(private userService:UserService) { }

  ngOnInit() {
   
    this.userService.getUsers()
    .subscribe(
res=>{
  this.user=res
  console.log(this.user)
},
err=>{
  console.log(err)
}
    )
                                                                                                                                                                                                                                                        
    
  }
  getUse()
  {
    
    this.userService.getUsers()
    .subscribe(
res=>{
  this.user=res
  console.log(this.user)
},
err=>{
  console.log(err)
}
    )
                                                                                                                                                                                                                                                        
    
  }

  OnSubmit(username)
  {
    this.blockData.username=username;
    this.userService.OnSubmit(this.blockData) .subscribe(
      res=>{
        this.ngOnInit();
        console.log(res)
      },
      err=>{
        console.log(err)
      })
  }
                                                                                                                                                                                                                                                                                                                                                                               
}
