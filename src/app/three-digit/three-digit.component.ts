import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-digit',
  templateUrl: './three-digit.component.html',
  styleUrls: ['./three-digit.component.css']
})
export class ThreeDigitComponent implements OnInit {

  stage: number;
  finalNum: number;

  flowerType = [
    { type: 'Irregular Flowers', code: 1},
    { type: '2 Regular Parts', code: 2},
    { type: '3 Regular Parts', code: 3},
    { type: '4 Regular Parts', code: 4},
    { type: '5 Regular Parts', code: 5},
    { type: '6 Regular Parts', code: 6},
    { type: '7 or More Regular Parts', code: 7},
    { type: 'Parts Indistinguishable', code: 8},
    {type: 'Goldenrod (Solidago)', code:9},
    {type: 'Aster', code:9.01}
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

  leafType = [
    {type: 'No apparent Leaves', code: 1},
    {type: 'Leaves Entire', code: 2},
    {type: 'Leaves Toothed or Lobed', code: 3},
    {type: 'Leaves Divided', code: 4},
  ];

  constructor() { }

  ngOnInit() {
    this.stage = 1;
    this.finalNum = 0;
  }

  select(num) {
    if (this.stage === 1) {
      if(num >= 9)
      {
         //This wil bring Goldenrod and Aster to a three digt number
        this.finalNum += num * 100; 
        // Then bring the stage to 4 and exit
        this.stage = 4;
      }
      else
      {
      this.finalNum += num * 100; //Brings the flower type to hundreds position 
      }
    }
    if (this.stage === 2) {
      this.finalNum += num * 10; // Brings the plant type to the tens position
    }
    if (this.stage === 3) {
      this.finalNum += num; //Technically "num * 1", also sets leaf type to last digit
    }
    this.stage++;
    console.log(this.finalNum, this.stage);
  }

}
