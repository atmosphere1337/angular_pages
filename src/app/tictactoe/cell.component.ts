import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="tictactoe-cell-outer">
          <div class="tictactoe-cell" (click)="fnc()">
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
          border: solid
      .tictactoe-cell
          background-color: white          
          height: 100%
          width: 100%
          box-sizing: border-box
          border: solid
          display: flex
          align-items: center
          justify-content: center
          font-size: 40px
  `]
})
export class CellComponent {
    @Input() value = ""
    fnc():void
    {
        alert('How are you doing?')
    }
}
