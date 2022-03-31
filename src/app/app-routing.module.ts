import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryCardComponent } from 'src/Components/DiaryCard/diary-card.component';
import { FormComponent } from 'src/pages/DiaryHome/form.component';

const routes: Routes = [
  { path: 'diary-card', component: DiaryCardComponent },
  { path: 'home', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
