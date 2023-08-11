import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="tictactoe-outer">
      <div class="tictactoe-main">
        <app-field></app-field>
        <app-menu></app-menu>
      </div>
    </div>
  `,
  styles: [`
    $hght: 300px
    $wdth: 300px
    .tictactoe-outer
        display: flex
        justify-content: center
        align-items: center
        height: 100vh
        background-color: rgb(170, 120, 170)
    .tictactoe-main
        background-color: blue
        height: $hght * 1.6
        width:  $wdth * 2.6
  `]
})
export class MainComponent {
    height = "500px";
    width = "500px";
}
