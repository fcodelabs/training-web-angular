import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './diarycardmodule/components/diary-card/diary-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormFieldModule, TextAreaModule, InputsModule} from "@progress/kendo-angular-inputs";
import {LabelModule} from "@progress/kendo-angular-label";
import { StoreModule } from '@ngrx/store';
import {diarycardsReducer} from "./diarycardmodule/store/cards.reducer";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {DiaryCardEffect} from "./diarycardmodule/store/cards.effects";
import { FormComponent } from './diarycardmodule/components/form/form.component';
import { HomeComponent } from './diarycardmodule/containers/home/home.component';
import {SignInComponent} from "./diarycardmodule/containers/sign-in/sign-in.component";
import {ButtonModule, ButtonsModule} from "@progress/kendo-angular-buttons";
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import {PopupModule} from "@progress/kendo-angular-popup";





@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    FormComponent,
    HomeComponent,
    SignInComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        BrowserAnimationsModule,
        GridModule,
        ReactiveFormsModule,
        FormsModule,
        FormFieldModule,
        LabelModule,
        TextAreaModule,
        StoreModule.forRoot({diaryCards: diarycardsReducer}, {}),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        EffectsModule.forRoot([DiaryCardEffect]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        ButtonModule,
        ButtonsModule,
        IconsModule,
        InputsModule,
        NavigationModule,
        IndicatorsModule,
        PopupModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
