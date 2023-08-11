import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './tictactoe/main.component';
import { StartComponent } from './start.component'; 

const routes: Routes = [
  {path: '', component: StartComponent },
  {path: 'tictactoe', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
