import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card.component';
import { AnswerComponent } from './answer.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [CommonModule, CardComponent, AnswerComponent],
  template: `
    <div class="quiz-main">
	  <app-card value= "{{ rawData[step].question }}">
		  <app-answer
			  *ngFor="let item of rawData[step].answers; let i=index"
			  [value]="item"
			  [index]="i"
			  (submitAnswer)="handleClick($event)"
		  />
	  </app-card>
    </div>
  `,
  styles: [`
    .quiz-main
        height: 100vh
        display: flex
        align-items: center
        justify-content: center
        background-color: rgb(255, 180, 170)
  `]
})
export class QuizPageComponent {
	/*
		
	*/
	handleClick(gothim: number) {
		if (gothim == this.rawData[this.step].correct)
			this.score += 1;
		if (this.step < this.rawData.length - 1)
			this.step += 1;
		else {
			alert(`You have got ${this.score} out of ${this.rawData.length}`);
			this.step = 0;
			this.score = 0;
		}
		
	}
	step : number = 0;
	score : number = 0;
	constructor () {
			
	}
	rawData : {question: string, correct: number, answers: string[] }[] = [
		{
			question: "What is the largest planet in our solar system?",
			correct: 3,
			answers: ["Saturn", "Sun", "Earth", "Jupiter"]
		},
		{
			question: "What name is given to animals that only eat plants and vegetables?",
			correct: 2,
			answers: ["Carnivores", "Omnivores", "Herbivores"]
		},
		{
			question: "What gas do we breathe in?",
			correct: 3,
			answers: ["Nitrogen", "Copium", "Helium", "Oxygen"]
		},
		{
			question: "What is the world’s largest mammal?",
			correct: 3,
			answers: ["JoeMoma", "Lion", "Bear", "Blue whale"]
		},
		{
			question: "What temperature does water boil at?",
			correct: 3,
			answers: ["36.6º",  "451º",  "0º", "100º"]
		},
	];
}
