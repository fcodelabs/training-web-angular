
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { DataCardComponent } from './components/data-card/data-card.component';

@NgModule({
  declarations: [AppComponent,  SignInComponent, HomePageComponent, DataCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
