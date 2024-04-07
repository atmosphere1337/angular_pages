import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="quiz-answer" (click)="handleClick(this.index)">
      {{ value }} {{ index }}
    </div>
  `,
  styles: [`
  .quiz-answer
      background-color: rgb(150, 150, 200)
      padding: 20px
      margin-bottom: 10px
      border-radius: 7px
      cursor: default
  .quiz-answer:hover
      background-color: yellow
  `]
})
export class AnswerComponent {
	@Input('value') value = "Answer";
	@Input('index') index = 0;
	@Output() submitAnswer = new EventEmitter<number>();
	handleClick(inp: number) {
		this.submitAnswer.emit(inp);
	}
	
}
