import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartenaireComponent } from './partenaire/partenaire.component';

import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';


import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RetraitComponent } from './retrait/retrait.component';

const routes: Routes = [

  {
    path:'partenaire',
    
    
    component:PartenaireComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'compte',
    component:CompteComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'register',
    component:RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'depot',
    component:DepotComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'transaction',
    component:TransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'retrait',
    component:RetraitComponent,
    canActivate: [AuthGuard]
  }
 
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
