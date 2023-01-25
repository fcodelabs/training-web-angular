import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SignInComponent } from './diary-module/containers/sign-in/sign-in.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DiaryHomeComponent } from './diary-module/containers/diary-home/diary-home.component'
import { DiaryCardComponent } from './diary-module/components/diary-card/diary-card.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { cardsReducer } from '../app/diary-module/store/reducers/cards.reducers'
import { DiaryHomeEffects } from './diary-module/store/effects/diaryHome.effects'
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'



@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        DiaryHomeComponent,
        DiaryCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ cards: cardsReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([DiaryHomeEffects]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideRemoteConfig(() => getRemoteConfig()),
               
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
