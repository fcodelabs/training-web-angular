import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./diarycardmodule/containers/sign-in/sign-in.component";
import {HomeComponent} from "./diarycardmodule/containers/home/home.component";


const routes: Routes = [
  {path:"", component:SignInComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
