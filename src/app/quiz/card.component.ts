import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, AnswerComponent],
  template: `
    <div class="quiz-card">
      <div class="quiz-question">
		{{ value }}
      </div>
	  <ng-content>
	  </ng-content>
    </div>
  `,
  styles: [`
    .quiz-card
        background-color: rgb(150, 200, 150)
        width: 400px
        height: 400px
        padding: 100px
        border-radius: 15px
    .quiz-question
        background-color: rgb(100, 150, 100)
        height: 100px
        padding: 20px
        margin-bottom: 20px
        border-radius: 10px
        cursor: default
  `]
})
export class CardComponent {
	@Input('value') value = 'Question?';
}
