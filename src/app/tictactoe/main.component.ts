import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="tictactoe-outer">
      <div class="tictactoe-main">
        <app-field [induce_state]="state"></app-field>
        <app-menu 
          (restart_clicked)="restart_clicked()"
        ></app-menu>
      </div>
    </div>
  `,
  styles: [`
    $hght: 450px
    $wdth: 380px
    .tictactoe-outer
        display: flex
        justify-content: center
        align-items: center
        height: 100vh
        background-color: rgb(170, 120, 170)
    .tictactoe-main
        background-color: blue
        height: $hght * 1.0
        width:  $wdth * 1.0
  `]
})
export class MainComponent {
    height = "500px";
    width = "500px";
    state = 0
    restart_clicked()
    {
        this.state++
        alert("restart")
    }
}
