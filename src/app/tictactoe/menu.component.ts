import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <div class="tictactoe-menu" (click)="emit_event()">
          Restart
      </div>
  `,
  styles: [`
      .tictactoe-menu
          background-color: red
          height: 70px
          font-size: 40px
          display: flex
          align-items: center
          justify-content: center
      .tictactoe-menu:hover
          background-color: yellow
  `]
})
export class MenuComponent {
    @Output() restart_clicked = new EventEmitter<any>()
    emit_event()
    {
        this.restart_clicked.emit()
    }
}
