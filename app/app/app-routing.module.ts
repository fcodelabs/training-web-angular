import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'home', component: HomePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
