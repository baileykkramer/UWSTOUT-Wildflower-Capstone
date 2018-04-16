import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral_structure',
  templateUrl: './floral_structure.component.html',
  styleUrls: ['./floral_structure.component.css']
})
export class Floral_structure implements OnInit {

  anwers: number[];

  flowerType = 
  [
    { type: 'Irregular Flowers', code: 1},
    { type: '2 Regular Parts', code: 2},
    { type: '3 Regular Parts', code: 3},
    { type: '4 Regular Parts', code: 4},
    { type: '5 Regular Parts', code: 5},
    { type: '6 Regular Parts', code: 6},
    { type: '7 or More Regular Parts', code: 7},
    { type: 'Parts Indistinguishable', code: 8},
    {type: 'Goldenrod (Solidago)', code: 9},
    {type: 'Aster', code: 9.01}
  ];

  plantType = 
  [
    {type: 'No Apparent Leaves', code: 1},
    {type: 'Basal Leaves Only', code: 2},
    {type: 'Alternate Leaves', code: 3},
    {type: 'Opposite or Whorled Leaves', code: 4},
    {type: 'Shrubs', code: 5},
    {type: 'Vines', code: 6},
  ];

  leafType = 
  [
    {type: 'No apparent Leaves', code: 1},
    {type: 'Leaves Entire', code: 2},
    {type: 'Leaves Toothed or Lobed', code: 3},
    {type: 'Leaves Divided', code: 4},
  ];



  constructor() { }

  ngOnInit() {}

}