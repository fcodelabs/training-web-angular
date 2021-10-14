import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {LayoutModule} from "@progress/kendo-angular-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputsModule} from "@progress/kendo-angular-inputs";
import {LabelModule} from "@progress/kendo-angular-label";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers} from "./store";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AddPostEffects} from "./store/effects/add-post.effects";
import {GetPostsEffects} from "./store/effects/get-posts.effects";

@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AddPostEffects,
      GetPostsEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
