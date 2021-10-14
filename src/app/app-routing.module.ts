import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryCardComponent} from "./components/diary-card/diary-card.component";
import {LoginComponent} from "./containers/login/login.component";
import {HomeComponent} from "./containers/home/home.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home/:name',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
