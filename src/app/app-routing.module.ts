import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './tictactoe/main.component';
import { QuizPageComponent } from './quiz/quiz-page.component'; 
import { StartComponent } from './start.component';

const routes: Routes = [
  {path: '', component: StartComponent },
  {path: 'tictactoe', component: MainComponent },
  {path: 'quiz', component: QuizPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
