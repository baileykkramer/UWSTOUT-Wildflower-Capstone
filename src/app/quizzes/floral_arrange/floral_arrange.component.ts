import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral_arrange',
  templateUrl: './floral_arrange.component.html',
  styleUrls: ['./floral_arrange.component.css']
})
export class Floral_Arrange implements OnInit {

  stage: number;
  answers: number [];
  instructions = 'Please select the answer that best describes your specimen';
  errorMsg = 'The code you have entered does not corresopond to any plant in our database. Please reexamine your entries and try again.';
  stage1Title = 'Question One';
  stage2Title = 'Question Two';
  stage3Title = 'Question Three';
  stage4Title = 'Question Four';
  stage5Title = 'Question Five';
  stage6Title = 'Question Six';
  stage7Title = 'Question Seven';
  stage8Title = 'Question Eight';
  stage9Title = 'Question Nine';
  stage10Title = 'Question Ten';
  stage11Title = 'Results';
  classificationTitle = 'Plant Classification';
  errorTitle = 'Classification Issue';

  QuestionOne = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionTwo = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionThree = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionFour = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ]; 

  QuestionFive = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionSix = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionSeven = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionEight = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionNine = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  QuestionTen = 
  [
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer A', code: 0},
    { type: 'Wrong Answer B', code: 0},
    { type: 'Wrong Answer C', code: 0},
    { type: 'Wrong Answer D', code: 0},
  ];

  constructor() { }

  ngOnInit() 
  {
    this.stage = 0;
    this.answers = [];
  }
  select(num) 
  {
        this.answers[this.stage] = num;
        this.stage++;
    console.log(' Code: ', this.answers[this.stage-1], 'Stage:', this.stage);
  }


  CorrectAnswer = 
  [
    {type: 'Correct 1', code: 0},
    {type: 'Correct 1', code: 1},
    {type: 'Correct 1', code: 2},
    {type: 'Correct 1', code: 3},
    {type: 'Correct 1', code: 4},
    {type: 'Correct 1', code: 5},
    {type: 'Correct 1', code: 6},
    {type: 'Correct 1', code: 7},
    {type: 'Correct 1', code: 8},
    {type: 'Correct 1', code: 9},
  ];


  display(num)
  {
  
  }
}