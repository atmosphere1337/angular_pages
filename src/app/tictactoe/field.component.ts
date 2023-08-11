import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule, CellComponent],
  template: `
      <div class="tictactoe-field-outer">
        <div class="tictactoe-field">
          <app-cell value=""></app-cell>
          <app-cell ></app-cell>
          <app-cell></app-cell>
          <app-cell></app-cell>
          <app-cell value=""></app-cell>
          <app-cell></app-cell>
          <app-cell></app-cell>
          <app-cell></app-cell>
          <app-cell value="X"></app-cell>
        </div>
      </div>
  `,
  styles: [`
      .tictactoe-field-outer
          height: 350px
          width: 350px
          background-color: aqua
          padding: 15px
          border: solid
      .tictactoe-field
          height: 100%
          width: 100%
          background-color: rgb(120,170,170)
          display: grid
          grid-template-columns: 33.333% 33.333% 33.333%
          grid-template-columns: 33.333% 33.333% 33.333%
          box-sizing: border-box
          border: solid
  `]
})
export class FieldComponent {

}
