import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in-module/containers/sign-in/sign-in.component';
import { HomePageComponent } from './post-module/containers/home-page/home-page.component';
import { AuthGuard } from './utils/auth-gard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
