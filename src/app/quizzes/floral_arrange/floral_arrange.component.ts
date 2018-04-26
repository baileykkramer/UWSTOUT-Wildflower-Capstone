import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral_arrange',
  templateUrl: './floral_arrange.component.html',
  styleUrls: ['./floral_arrange.component.css']
})
export class Floral_Arrange implements OnInit {

  stage: number;
  answers: number[];
  anstype: string[];
  instructions = 'Question ' + 1 + ' of 10';
  errorMsg = 'The code you have entered does not corresopond to any plant in our database. Please reexamine your entries and try again.';
  stage1Title = 'What is an elongated flower cluster with stalked flowers arranged along a central stem called?';
  stage2Title = 'What is an elongate flower cluster with stalkless flowers arranged along a centaral stem called?';
  stage3Title = 'What is an elongated branched flower cluster called?';
  stage4Title = 'A more or less flat-topped, branched flower cluster in which the branching is typically opposite is called what?';
  stage5Title = 'What is a flat-topped or convex branched flower cluster in which the branching is typically alternate called?';
  stage6Title = 'What is a flower cluster in which all the flower stalks radiate from the same point, like the ribs of an umbrella called?';
  stage7Title = 'What is a group of flowers joined together in a short, dense, terminal cluster, as in the clovers and in all members of the Composite Family is called?';
  stage8Title = 'What is the fleshy spike of flowers in a species of the Arum Family Called?';
  stage9Title = 'A large bract enclosing a flower cluster, as in the Arum Family is called what?';
  stage10Title = 'Arranged in a circle around a central point is called what?';
  stage11Title = 'Results';
  classificationTitle = 'Plant Classification';
  errorTitle = 'Classification Issue';

  //
  QuestionOne =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionTwo =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionThree =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionFour =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionFive =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionSix =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionSeven =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionEight =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionNine =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  QuestionTen =
    [
      { type: 'Answer', code: 1 },
      { type: 'Wrong Answer A', code: 0 },
      { type: 'Wrong Answer B', code: 0 },
      { type: 'Wrong Answer C', code: 0 },
      { type: 'Wrong Answer D', code: 0 },
    ];

  constructor() { }

  ngOnInit() {
    this.stage = 0;
    this.answers = [];
    this.anstype = [];
  }
  select(num, string) {
    this.answers[this.stage] = num;
    this.anstype[this.stage] = string;
    this.stage++;
    this.instructions = 'Question ' + (this.stage + 1) + ' of 10';
    console.log('Type: ', this.anstype[this.stage - 1], ' Code: ', this.answers[this.stage - 1], 'Stage:', this.stage);
  }

  CorrectAnswer =
    [
      { type: 'Raceme', code: 0 },
      { type: 'Correct 2', code: 1 },
      { type: 'Correct 3', code: 2 },
      { type: 'Correct 4', code: 3 },
      { type: 'Correct 5', code: 4 },
      { type: 'Correct 6', code: 5 },
      { type: 'Correct 7', code: 6 },
      { type: 'Correct 8', code: 7 },
      { type: 'Correct 9', code: 8 },
      { type: 'Correct 10', code: 9 },
    ];
}