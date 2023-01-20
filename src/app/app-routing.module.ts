import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DiaryHomeComponent } from './diary-module/containers/diary-home/diary-home.component'
import { SignInComponent } from './diary-module/containers/sign-in/sign-in.component'

const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'home', component: DiaryHomeComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
