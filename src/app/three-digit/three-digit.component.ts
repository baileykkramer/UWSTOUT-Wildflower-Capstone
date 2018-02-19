import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-digit',
  templateUrl: './three-digit.component.html',
  styleUrls: ['./three-digit.component.css']
})
export class ThreeDigitComponent implements OnInit {

  stage: number;
  finalNum: number;

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

  ngOnInit() {
    this.stage = 1;
    this.finalNum = 0;
  }

  select(num) 
  {
    if (this.stage === 1) {
      if (num >= 9)
      {
         // This wil bring Goldenrod and Aster to a three digt number
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
      this.finalNum += num * 10; //Brings the plant type to the tens position
    }
    if (this.stage === 3) {
      this.finalNum += num; //Technically "num * 1", also sets leaf type to last digit
      this.idscan(this.finalNum);
    }
    this.stage++;
    console.log(' Code: ', this.finalNum, 'Stage:', this.stage);
  }

  //This Function is designed to remove redundant three-digt code after the user has selected the various types.
  //It does not take care of codes that do not exist
  idscan(finalNum: number)
  {

    if(finalNum > 200 && finalNum < 300)  //Checks the 200's (One statment containted within)
    {
      this.finalNum = 232
    }
    
   else if(finalNum > 700 && finalNum < 800) //Checks the 700's (Three checks contained within)
    {
      if(finalNum === 724)
      {
        this.finalNum = 723
      }
      else if( finalNum === 734)
      {
        this.finalNum = 733
      }
      else if (finalNum > 752 && finalNum <= 764)
      {
        this.finalNum = 752
      }
    }

   else if(finalNum > 600 && finalNum < 700) //Checks the 600's (Four checks containted within)
    {
      if(finalNum === 624)
      {
        this.finalNum = 623
      }
      else if(finalNum === 644)
      {
        this.finalNum = 643
      }
      else if(finalNum === 663)
      {
        this.finalNum = 662
      }
      else if (finalNum > 651 && finalNum <= 653)
      {
        this.finalNum = 651
      }
    }
   
    else if (finalNum >800 && finalNum < 900)  //Check 800's (Four checks containted within)
    {
      if (finalNum === 823)
      {
        this.finalNum = 822
      }
      else if(finalNum === 844)
      {
        this.finalNum = 843
      }
      else if(finalNum > 851 && finalNum <= 853)
      {
        this.finalNum = 851
      }
      else if (finalNum > 862 && finalNum <= 864)
      {
        this.finalNum = 862
      }
    }
   }
}
