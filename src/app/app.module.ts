import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from '../Components/DiaryCard/diary-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from '../pages/DiaryHome/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormFieldModule, TextAreaModule } from "@progress/kendo-angular-inputs";


@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    TextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
