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
    { type: 'Parts Indistinguishable', code: 8}
  ];

  plantType = [];

  leafType = [];

  constructor() { }

  ngOnInit() {
    this.stage = 1;
    this.finalNum = 0;
  }

  select(num) {
    if (this.stage === 1) {
      this.finalNum += num * 100;
    }
    if (this.stage === 2) {
      this.finalNum += num * 10;
    }
    if (this.stage === 3) {
      this.finalNum += num * 1;
    }
    this.stage++;
    console.log(this.finalNum, this.stage);
  }

}
