import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { QuestionsComponent} from './Questions/Questions.component';
import { Question1Component } from './Question1/Question1.component';
import { Question2Component } from './Question2/Question2.component';
import { Question3Component } from './Question3/Question3.component';


const routes: Routes = [
  {path : ''         ,redirectTo : '/questions', pathMatch : 'full'},
  {path : 'questions',component : QuestionsComponent },
  {path : 'q1',component  : Question1Component},
  {path : 'q2'    ,component  : Question2Component},
  {path : 'q3' ,component  : Question3Component},
  {path : '**'       ,component  : QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
