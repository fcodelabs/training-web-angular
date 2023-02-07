import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';


@NgModule({
  declarations: [
    AppComponent, 
    SignInPageComponent, 
    HomePageComponent, DiaryCardComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
