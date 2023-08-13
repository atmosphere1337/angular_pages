import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="tictactoe-cell-outer">
        <div class="tictactoe-cell" (click)="click_left()">
            {{value}} 
        </div>
      </div>
  `,
  styles: [`
      .tictactoe-cell-outer
          padding: 10px 
          height: 100%
          width: 100%
          box-sizing: border-box
      .tictactoe-cell
          background-color: white          
          height: 100%
          width: 100%
          box-sizing: border-box
          display: flex
          align-items: center
          justify-content: center
          font-size: 40px
  `]
})
export class CellComponent {
    value = ""
    @Input() turn = 0
    @Input() pos = 0
    @Output() turned = new EventEmitter<any>()
    click_left():void
    {
        if (this.turn == 1 && this.value == "")
        {
            this.value = "X"
            this.turned.emit(this.pos);
        }
        else if (this.turn == 2 && this.value == "")
        {
            this.value = "O"
            this.turned.emit(this.pos);
        }
    }
}
