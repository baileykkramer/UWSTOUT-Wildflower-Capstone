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
  questions: Question[];
  answers: Plant[];
  currentId: number;
  multianswer: Question[];
  maxCount = 0;

  constructor(private php: PHPService, private results: ResultsService, private router: Router) { }

  ngOnInit() {
    this.setNum = 0;
    this.generateButtons(this.codeNum);
  }

  // Create new screen for next set of questions
  generateButtons(qNum: number): void {
    // Update currentId to match the current one
    this.currentId = qNum;

    // retrieve all questions based on qNum
    this.php.getQuestions(qNum, this.setNum).subscribe(
      (data) => {
        const question = data.json();
        this.questions = question;
      }, (err) => { console.log('Error', err); },
      () => {
        this.setNum++;
        if (this.questions.length === 1) {
          this.select(this.questions[0].qNum, this.questions[0].type, this.questions[0].resultId);
        }
      }
    );
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
          this.goToResults();
        }
      );
    } else if (type === 'Q') { // Otherwise question should be another question
      // generate new buttons for page
      this.generateButtons(qNum);
    } else { // We shouldn't hit this, but I have it just incase
      // Deal with error here :D
      console.log('Somehow hit a question without an answer type');
    }
  }

  // Getting the list of questions in a tree
  currentresults(currentId) {
    this.php.mulitPlant(currentId).subscribe(
      (data) => {
        const answer = data.json();
        this.multianswer = answer;
        this.maxCount = this.multianswer.length;
      }, (err) => { console.log('Error', err); },
      () => {
        this.currentResultsExtended(0, this.multianswer);
      }
    );
  }

  // Getting all of the plants in a certain tree and adding them to the list
  currentResultsExtended(count: number, multiAnswer: Question[]) {
    this.php.getPlants(this.multianswer[count].resultId).subscribe(
      (data) => {
        if (count === 0) {
          this.answers = data.json();
        } else {
          this.answers = this.answers.concat(data.json());
        }
      }, (err) => { console.log('Error', err); },
      () => {
        if (count < this.maxCount - 1) {
          this.currentResultsExtended(count + 1, this.multianswer);
        } else {
          this.goToResults();
        }
      }
    );
  }

  // Go the the resutls page
  goToResults() {
    this.results.setPlants(this.answers, 0);
    this.router.navigate(['results']);
  }

  // This function is to process the back button appropriately
  goBack(): void {
    // If pos is 0, go back to previous component
    if (this.setNum !== 0) {
      // Reduce id to the proper value
      this.currentId = this.currentId / 10;
      this.currentId = Math.floor(this.currentId);

      this.setNum = this.setNum - 2;

      this.generateButtons(this.currentId);
    }
  }
}
