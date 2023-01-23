import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NavigationModule } from '@progress/kendo-angular-navigation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.components';
import { AddCardComponent } from './add-card/add-card.component';

import { environment } from '../environments/environment';

// import {  } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    CardsComponent,
    HeaderComponent,
    CardComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    LayoutModule,
    IndicatorsModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
