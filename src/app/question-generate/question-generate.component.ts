import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { Plant } from '../plant';
import { PHPService } from '../php-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-generate',
  templateUrl: './question-generate.component.html',
  styleUrls: ['./question-generate.component.css']
})
export class QuestionGenerateComponent implements OnInit {

  @Input() codeNum: number;
  setNum = 0;
  questions: Question;
  answers: Plant[];

  constructor(private php: PHPService, private router: Router) { }

  ngOnInit() {
    this.generateButtons(this.codeNum);
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
      // navigate to the results page
      this.router.navigate(['results']);
      // retrieve results based on resultId
      this.php.getPlants(resultId).subscribe(
        (data) => {
          console.log(data);
          const answer = data.json();
          this.answers = answer;
        }, (err) => { console.log('Error', err); },
        () => {
          console.log(this.answers);
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


}
