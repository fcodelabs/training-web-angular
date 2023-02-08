import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: SignInPageComponent },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
