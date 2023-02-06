import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { cardReducer } from './store/reducers/card.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    HomePageComponent,
    DiaryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    StoreModule.forRoot({ cards: cardReducer }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
