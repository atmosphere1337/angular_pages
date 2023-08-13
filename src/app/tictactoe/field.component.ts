import { Component, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { TictactoeService } from './tictactoe.service';
@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule, CellComponent],
  template: `
      <div class="tictactoe-field-outer">
        <div class="tictactoe-field" *ngIf="ongoing">
          <app-cell 
            *ngFor="let i of range9" 
            [turn] = "turn"
            [pos] = i
            (turned) = "turned($event)"
            >
          </app-cell>
        </div>
      </div>
  `,
  styles: [`
      .tictactoe-field-outer
          height: 350px
          width: 350px
          background-color: aqua
          padding: 15px
      .tictactoe-field
          height: 100%
          width: 100%
          background-color: rgb(120,170,170)
          display: grid
          grid-template-columns: 33.333% 33.333% 33.333%
          grid-template-rows: 33.333% 33.333% 33.333%
          box-sizing: border-box
  `]
})
export class FieldComponent {
    @Input () induce_state = 0
    ngOnChanges(changes: SimpleChanges)
    {
        this.field = Array(9).fill(0)
        this.turn = 1
        this.ongoing = false
        this.changeDetectorRef.detectChanges();
        this.ongoing = true
    }
    constructor(private service: TictactoeService, private changeDetectorRef: ChangeDetectorRef){}
    turn = 1
    range9 = [0,1,2,3,4,5,6,7,8]
    field = Array(9).fill(0)
    ongoing = true
    turned(pos :number)
    {
        this.field[pos] = this.turn
        if (this.turn == 1)
            this.turn = 2
        else
            this.turn = 1
        let test1:boolean = this.service.check_winner(this.field)
        let test2:boolean = this.service.check_full(this.field)
        if (test1 || test2)
        {
            let msg1:string = ""
            let msg2:string = ""
            if (test1)
                msg1 = "Player " + this.turn + " won"
            if (test2)
                msg2 = "All cells are wasted"
            let msg:string = msg1 + " " + msg2
            alert(msg)
        }
    }
}
