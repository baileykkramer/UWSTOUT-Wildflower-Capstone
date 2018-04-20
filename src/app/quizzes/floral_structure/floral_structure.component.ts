import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral_structure',
  templateUrl: './floral_structure.component.html',
  styleUrls: ['./floral_structure.component.css']
})
export class Floral_Structure implements OnInit {

  anwers: number[];


  QuestionOne = 
  [
    {type: 'Question:', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionTwo = 
  [
    {type: 'Question:', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionThree = 
  [
    {type: 'Question:', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionFour = 
  [
    {type: 'Question:', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ]; 

  QuestionFive = 
  [
    {type: 'No apparent Leaves', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionSix = 
  [
    {type: 'No apparent Leaves', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionSeven = 
  [
    {type: 'No apparent Leaves', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionEight = 
  [
    {type: 'No apparent Leaves', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionNine = 
  [
    {type: 'No apparent Leaves', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  QuestionTen = 
  [
    {type: 'No apparent Leaves', code: 0},
    { type: 'Answer', code: 1},
    { type: 'Wrong Answer', code: 2},
    { type: 'Wrong Answer', code: 3},
    { type: 'Wrong Answer', code: 4},
    { type: 'Wrong Answer', code: 5},
  ];

  constructor() { }

  ngOnInit() {}

}