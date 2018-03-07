import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { PHPService } from '../php-service.service';

@Component({
  selector: 'app-question-generate',
  templateUrl: './question-generate.component.html',
  styleUrls: ['./question-generate.component.css']
})
export class QuestionGenerateComponent implements OnInit {

  @Input() qNum: number;
  newQuestions: Question;

  activeQuestions: Question[] = [
    {id: 0, text: '', type: '', result: 0},
    {id: 1, text: '', type: '', result: 0},
    {id: 2, text: '', type: '', result: 0},
    {id: 3, text: '', type: '', result: 0},
    {id: 4, text: '', type: '', result: 0},
    {id: 5, text: '', type: '', result: 0}
  ];

  // To be commented out local test versions
  pos: number;
  test0: Question[] = [
    {id: 1421, text: 'Leaves whorled', type: 'A', result: 72},
    {id: 1422, text: 'Leaves 2, in the middle of the stem', type: 'A', result: 74},
    {id: 1423, text: 'Leaves in pairs', type: 'Q', result: 0}
  ];
  test1: Question[] = [
    {id: 14231, text: 'Flowers short- or long-stalked, growing singly, or in pairs or racemes', type: 'Q', result: 0},
    {id: 14232, text: 'Flowers stalkless, growing in whorls, heads or dense clusters', type: 'A', result: 78}
  ];
  test2: Question[] = [
    {id: 132311, text: 'Flowers white or lue, 4-lobed (Speedwells)', type: 'A', result: 74},
    {id: 132312, text: 'Flowers 2-lipped or 6-petaled', type: 'A', result: 76}
  ];
  answer: string;

  constructor(private php: PHPService) { }

  // Create new screen for next set of questions
  generateButtons(qId: number): void {
    // empty activeQuestions for next set of questions
    for (let i = 0; i < 6; i++) {
      this.activeQuestions[i] = {id: i, text: '', type: '', result: 0};
    }

    // retrieve all questions joined to qId
    /*thinking of doing this by setting a var instances equal to number of joins. Then loop through for each element
    This should be far more doable when we actually know how this will be presented*/
    console.log(this.newQuestions);
    this.php.getQuestions(qId).subscribe(question => {
      this.newQuestions = question;
      console.log(this.newQuestions);
    });
    console.log(this.newQuestions);

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

  // Pass on results for the display
  result(result: number): void {
    // This line is for the local version. Final version will pass result for plant database and new page
    this.answer = result.toString();
  }

  ngOnInit() {
    this.pos = 0;
    this.answer = '';
    this.generateButtons(this.qNum);
  }

  select(id, type, result): void {

    // console.log(id,type);

    // If selected question is an answer
    if (type === 'A') {
      // Pass on result to generate next page
      this.result(result);
    }
    // Otherwise question should be another question
    else if (type === 'Q') {
      // generate new buttons for page
      this.generateButtons(id);
    }
    // We shouldn't hit this, but I have it just incase
    else {
      // Deal with error here :D
      console.log('Somehow hit a question without a answer type');
    }
  }


}
