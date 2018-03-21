import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { PHPService } from '../php-service.service';

@Component({
  selector: 'app-question-generate',
  templateUrl: './question-generate.component.html',
  styleUrls: ['./question-generate.component.css']
})
export class QuestionGenerateComponent implements OnInit {

  @Input() codeNum: number;
  newQuestions: Question;

  activeQuestions: Question[] = [
    {qNum: 0, code: this.codeNum, text: '', type: '', resultId: 0},
    {qNum: 1, code: this.codeNum, text: '', type: '', resultId: 0},
    {qNum: 2, code: this.codeNum, text: '', type: '', resultId: 0},
    {qNum: 3, code: this.codeNum, text: '', type: '', resultId: 0},
    {qNum: 4, code: this.codeNum, text: '', type: '', resultId: 0},
    {qNum: 5, code: this.codeNum, text: '', type: '', resultId: 0}
  ];

  // To be commented out local test versions
  pos: number;
  test0: Question[] = [
    {qNum: 1421, code: 142, text: 'Leaves whorled', type: 'A', resultId: 72},
    {qNum: 1422, code: 142, text: 'Leaves 2, in the middle of the stem', type: 'A', resultId: 74},
    {qNum: 1423, code: 142, text: 'Leaves in pairs', type: 'Q', resultId: 0}
  ];
  test1: Question[] = [
    {qNum: 14231, code: 142, text: 'Flowers short- or long-stalked, growing singly, or in pairs or racemes', type: 'Q', resultId: 0},
    {qNum: 14232, code: 142, text: 'Flowers stalkless, growing in whorls, heads or dense clusters', type: 'A', resultId: 78}
  ];
  test2: Question[] = [
    {qNum: 132311, code: 132, text: 'Flowers white or lue, 4-lobed (Speedwells)', type: 'A', resultId: 74},
    {qNum: 132312, code: 132, text: 'Flowers 2-lipped or 6-petaled', type: 'A', resultId: 76}
  ];
  answer: string;

  constructor(private php: PHPService) { }

  // Create new screen for next set of questions
  generateButtons(qqNum: number): void {
    // empty activeQuestions for next set of questions
    for (let i = 0; i < 6; i++) {
      this.activeQuestions[i] = {qNum: i, code: this.codeNum, text: '', type: '', resultId: 0};
    }

    // retrieve all questions joined to qqNum
    /*thinking of doing this by setting a var instances equal to number of joins. Then loop through for each element
    This should be far more doable when we actually know how this will be presented*/
    console.log(this.codeNum);
    this.php.getQuestions(this.codeNum).subscribe(
      (data) => {
        // const question = data.json()[0]s;
        console.log(data);
        // console.log(question);
        // this.newQuestions = question;
      }, (err) => { console.log('Error', err); },
      () => {
        console.log(this.newQuestions);
      }
    );

    // To be commented out version to show works locally
    switch (this.pos) {
      case 0:
        for (let i = 0; i < this.test0.length; i++) {
          this.activeQuestions[i] = this.test0[i];
        }
        this.pos++;
        break;
      case 1:
        for (let i = 0; i < this.test1.length; i++) {
          this.activeQuestions[i] = this.test1[i];
        }
        this.pos++;
        break;
      case 2:
        for (let i = 0; i < this.test2.length; i++) {
          this.activeQuestions[i] = this.test2[i];
        }
        this.pos++;
        break;
    }

    // Create questions here
    /*
    for (let i = 0; i < newQuestions.length; i++){
      this.activeQuestions[i] = newQuestions[i];
    }*/
  }

  // Pass on resultIds for the display
  resultId(resultId: number): void {
    // This line is for the local version. Final version will pass resultId for plant database and new page
    this.answer = resultId.toString();
  }

  ngOnInit() {
    this.pos = 0;
    this.answer = '';
    this.generateButtons(this.codeNum);
  }

  select(qNum, type, resultId): void {

    // console.log(qNum,type);

    // If selected question is an answer
    if (type === 'A') {
      // Pass on resultId to generate next page
      this.resultId(resultId);
    }
    // Otherwise question should be another question
    else if (type === 'Q') {
      // generate new buttons for page
      this.generateButtons(qNum);
    }
    // We shouldn't hit this, but I have it just incase
    else {
      // Deal with error here :D
      console.log('Somehow hit a question without an answer type');
    }
  }
}
