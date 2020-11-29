import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionsComponent} from './Questions/Questions.component'
import { Question1Component } from './Question1/Question1.component';
import { Question2Component } from './Question2/Question2.component';
import { Question3Component } from './Question3/Question3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    Question1Component,
    Question2Component,
    Question3Component
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
