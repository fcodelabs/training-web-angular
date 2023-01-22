import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomePageComponent,
    DataCardComponent,
    CardFormComponent,
    NavBarComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
     
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
