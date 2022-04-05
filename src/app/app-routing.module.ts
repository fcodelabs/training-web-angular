import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from 'src/app/card-module/pages/card-list/card-list.component';
import { DiaryCardComponent } from 'src/app/card-module/components/DiaryCard/diary-card.component';
import { FormComponent } from 'src/app/card-module/components/DiaryHome/form.component';

const routes: Routes = [
  { path: 'diary-card', component: DiaryCardComponent },
  { path: 'card-form', component: FormComponent },
  { path: 'home', component: CardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
