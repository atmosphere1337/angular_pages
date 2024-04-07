import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  template: `
      <nav>
        <a routerLink = "">Home</a> | 
        <a routerLink = "tictactoe">TicTacToe</a> |
        <a routerLink = "quiz">Quiz</a>
      </nav>
  `,
  styles: [
  ]
})
export class StartComponent {

}
