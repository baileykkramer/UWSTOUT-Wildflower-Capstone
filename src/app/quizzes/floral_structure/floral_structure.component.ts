import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral_structure',
  templateUrl: './floral_structure.component.html',
  styleUrls: ['./floral_structure.component.css']
})
export class Floral_Structure implements OnInit {

  stage: number;
  answers: number[];
  anstype: string[];
  instructions = 'Question ' + 1 + ' of 11';
  errorMsg = 'The code you have entered does not corresopond to any plant in our database. Please reexamine your entries and try again.';
  stage1Title = 'Identify the indicated part of the flower.';
  stage2Title = 'Identify the indicated part of the flower.';
  stage3Title = 'Identify the indicated part of the flower.';
  stage4Title = 'Identify the indicated part of the flower.';
  stage5Title = 'Identify the indicated part of the flower.';
  stage6Title = 'Identify the indicated part of the flower.';
  stage7Title = 'Identify the indicated part of the flower.';
  stage8Title = 'Identify the indicated part of the flower.';
  stage9Title = 'Identify the indicated part of the flower.';
  stage10Title = 'Identify the indicated part of the flower.';
  stage11Title = 'Identify the indicated part of the flower.';
  stage12Title = 'Results';
  classificationTitle = 'Plant Classification';
  errorTitle = 'Classification Issue';

  QuestionOne =
    [
      { type: 'Receptacle', code: 1 },
      { type: 'Calyx', code: 0 },
      { type: 'Pedicel', code: 0 },
      { type: 'Speal', code: 0 },
      { type: 'Coralla', code: 0 },
    ];

  QuestionTwo =
    [
      { type: 'Filament', code: 0 },
      { type: 'Stigma', code: 0 },
      { type: 'Calyx', code: 0 },
      { type: 'Receptacle', code: 0 },
      { type: 'Anther', code: 1 },
    ];

  QuestionThree =
    [
      { type: 'Petal', code: 0 },
      { type: 'Anther', code: 0 },
      { type: 'Spike', code: 0 },
      { type: 'Pedicel', code: 1 },
      { type: 'Raceme', code: 0 },
    ];

  QuestionFour =
    [
      { type: 'Stamen', code: 0 },
      { type: 'Calyx', code: 0 },
      { type: 'Sepal', code: 1 },
      { type: 'Stigma', code: 0 },
      { type: 'Filament', code: 0 },
    ];

  QuestionFive =
    [
      { type: 'Raceme', code: 0 },
      { type: 'Receptacle', code: 0 },
      { type: 'Anther', code: 0 },
      { type: 'Coralla', code: 1 },
      { type: 'Stamen', code: 0 },
    ];

  QuestionSix =
    [
      { type: 'Style', code: 1 },
      { type: 'Anther', code: 0 },
      { type: 'Stigma', code: 0 },
      { type: 'Ovary', code: 0 },
      { type: 'Pedicel', code: 0 },
    ];

  QuestionSeven =
    [
      { type: 'Stigma', code: 0 },
      { type: 'Ovary', code: 0 },
      { type: 'Pistil', code: 1 },
      { type: 'Petal', code: 0 },
      { type: 'Filament', code: 0 },
    ];

  QuestionEight =
    [
      { type: 'Ovary', code: 0 },
      { type: 'Coralla', code: 0 },
      { type: 'Umbel', code: 0 },
      { type: 'Sepal', code: 0 },
      { type: 'Stamen', code: 1 },
    ];

  QuestionNine =
    [
      { type: 'Filament', code: 0 },
      { type: 'Stigma', code: 1 },
      { type: 'Style', code: 0 },
      { type: 'Ovary', code: 0 },
      { type: 'Stamen', code: 0 },
    ];

  QuestionTen =
    [
      { type: 'Anther', code: 0 },
      { type: 'Receptacle', code: 0 },
      { type: 'Pedicel', code: 0 },
      { type: '**Filament**', code: 1 },
      { type: 'Sepal', code: 0 },
    ];

  QuestionEleven =
    [
      { type: 'Stigma', code: 0 },
      { type: 'Style', code: 0 },
      { type: 'Ovary', code: 1 },
      { type: 'Anther', code: 0 },
      { type: 'Petal', code: 0 },
    ];
  CorrectAnswer =
    [
      { type: 'Receptacle', code: 0 },
      { type: 'Anther', code: 1 },
      { type: 'Pedicel', code: 2 },
      { type: 'Sepal (Calyx)', code: 3 },
      { type: 'Petal (Coralla)', code: 4 },
      { type: 'Style', code: 5 },
      { type: 'Pistil', code: 6 },
      { type: 'Stamen', code: 7 },
      { type: 'Stigma', code: 8 },
      { type: 'Filament', code: 9 },
      { type: 'Ovary', code: 10 },
    ];

  Hint =
    [
      { type: 'The thickened part of a stem from which the flower organs grow.', code: 0 },
      { type: 'An oval-shaped structure that produces pollen.', code: 1 },
      { type: 'A small stalk bearing an individual flower in an inflorescence.', code: 2 },
      { type: 'Green and leaflike this structure encloses the petals.', code: 3 },
      { type: 'Modified leaves that surround the reproductive parts of flowers.', code: 4 },
      { type: 'A thin and long stalk connecting two parts of the flower.', code: 5 },
      { type: 'The female organ of a flower.', code: 6 },
      { type: 'The male organ of a flower.', code: 7 },
      { type: 'The receptive tip of a carpel, or of several fused carpels, in the gynoecium of a flower.', code: 8 },
      { type: 'Part of pollen production, this structure is a slender stalk.', code: 9 },
      { type: 'Part of the female organ it houses the ovule(s).', code: 10 },
    ]

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
    this.instructions = 'Question ' + (this.stage + 1) + ' of 11';
    // console.log('Type: ', this.anstype[this.stage - 1], ' Code: ', this.answers[this.stage - 1], 'Stage:', this.stage);
  }


}