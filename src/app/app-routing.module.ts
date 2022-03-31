import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryCardComponent } from 'src/Components/DiaryCard/diary-card.component';

const routes: Routes = [
  {path: 'diary-card', component: DiaryCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
