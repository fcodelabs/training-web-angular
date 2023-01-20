import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SignInComponent } from './diary-module/containers/sign-in/sign-in.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DiaryHomeComponent } from './diary-module/containers/diary-home/diary-home.component'

@NgModule({
    declarations: [AppComponent, SignInComponent, DiaryHomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
