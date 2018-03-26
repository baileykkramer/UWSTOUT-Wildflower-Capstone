import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';
import { PHPService } from '../php-service.service';
import { Router } from '@angular/router';
import { ResultsService } from '../results/results.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-question-generate',
  templateUrl: './question-generate.component.html',
  styleUrls: ['./question-generate.component.css']
})
export class QuestionGenerateComponent implements OnInit {

  @Input() codeNum: number;
  setNum: number;
  questions: Question;
  answers: Plant[];
  currentId: number;

  constructor(private php: PHPService, private results: ResultsService, private router: Router) { }

  ngOnInit() {
    this.generateButtons(this.codeNum);
    this.setNum = 0;
  }

  // Create new screen for next set of questions
  generateButtons(qNum: number): void {

    // retrieve all questions based on qNum
    this.php.getQuestions(qNum, this.setNum).subscribe(
      (data) => {
        const question = data.json();
        this.questions = question;
      }, (err) => { console.log('Error', err); },
      () => {
        this.setNum++;
      }
    );
    // TODO: add if case for if there is only 1 question to move directly to results
  }

  // when one of the buttons are clicked
  select(qNum, type, resultId): void {
    // If selected question is an answer
    if (type === 'A') {
      // retrieve results based on resultId
      this.php.getPlants(resultId).subscribe(
        (data) => {
          const answer = data.json();
          this.answers = answer;
        }, (err) => { console.log('Error', err); },
        () => {
          this.results.setPlants(this.answers);
          this.router.navigate(['results']);
        }
      );
    }
    // Otherwise question should be another question
    else if (type === 'Q') {
      // generate new buttons for page
      this.generateButtons(qNum);
    }
    // We shouldn't hit this, but I have it just incase
    else {
      // Deal with error here :D
      console.log('Somehow hit a question without a answer type');
    }
  }

  // This function is to process the back button appropriately
  goBack(): void {
    this.setNum--;
    // If pos is 0, go back to previous component
    if(this.setNum !== 0){
      // Reduce id to the proper value
      this.currentId = this.currentId/10;
      this.currentId = Math.floor(this.currentId);
      this.generateButtons(this.currentId);
    }
  }
}
