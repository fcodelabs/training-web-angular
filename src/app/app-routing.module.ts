import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from 'src/app/card-module/containers/home/card-list.component';
import { DiaryCardComponent } from 'src/app/card-module/components/diary-card/diary-card.component';
import { FormComponent } from 'src/app/card-module/components/diary-form/form.component';
import { LoginComponent } from './card-module/containers/login/login.component';

const routes: Routes = [
  { path: 'diary-card', component: DiaryCardComponent },
  { path: 'card-form', component: FormComponent },
  { path: 'home', component: CardListComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
