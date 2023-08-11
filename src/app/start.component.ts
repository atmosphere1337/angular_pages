import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  template: `
      <nav>
        <a routerLink = "">Home</a> | 
        <a routerLink = "tictactoe">TicTacToe</a>
      </nav>
  `,
  styles: [
  ]
})
export class StartComponent {

}
