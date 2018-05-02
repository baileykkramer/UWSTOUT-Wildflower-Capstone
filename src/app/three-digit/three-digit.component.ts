import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-digit',
  templateUrl: './three-digit.component.html',
  styleUrls: ['./three-digit.component.css']
})
export class ThreeDigitComponent implements OnInit {

  stage: number;
  finalNum: number;

  instructions = 'Please select the answer that best describes your specimen';
  errorMsg = 'The code you have entered does not corresopond to any plant in our database. Please reexamine your entries and try again.';
  stage1Title = 'Flower Type';
  stage2Title = 'Plant Type';
  stage3Title = 'Leaf Type';
  classificationTitle = 'Plant Classification';
  errorTitle = 'Classification Issue';

  // Var to handle back from question-generate
  back: boolean;

  flowerType = [
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

  plantType = [
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

  // This array contains a list of group codes that do not
  // coresspond to any group code in the book
  invalid = [ // There are 88 entries in this array
    112, 113, 114, 121, 131, 141, 161, 163, 211, 213, 214,
    215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225,
    226, 227, 228, 229, 230, 231, 311, 312, 313, 314, 321,
    323, 324, 331, 341, 343, 344, 351, 353, 354, 361, 363,
    364, 412, 413, 414, 421, 423, 424, 431, 441, 451, 461,
    462, 463, 512, 513, 514, 521, 531, 541, 612, 613, 614,
    621, 631, 641, 654, 661, 664, 712, 713, 714, 721, 731,
    741, 751, 812, 813, 814, 821, 824, 831, 841, 854, 861
  ];

  constructor() { }

  ngOnInit() {
    this.stage = 1;
    this.finalNum = 0;
    this.back = false;
  }

  select (num) {
    if (this.stage === 1) {
      if (num >= 9) {
         // This wil bring Goldenrod and Aster to a three digt number
        this.finalNum += num * 100;
        // Then bring the stage to 4 and exit
        this.stage = 5;
      } else {
      this.finalNum += num * 100; // Brings the flower type to hundreds position
      }
    } else if (this.stage === 2) {
      this.finalNum += num * 10; // Brings the plant type to the tens position
    } else if (this.stage === 3) {
      this.finalNum += num; // Technically "num * 1", also sets leaf type to last digit
      this.idscan(this.finalNum);
      this.idverity(this.finalNum);
    }

    if (this.stage !== 9) {
      this.stage++;
    }
  }

  // This Function is designed to remove redundant three-digt
  // code after the user has selected the various types.
  // It does not take care of codes that do not exist
  idscan(finalNum: number) {

    if (finalNum > 200 && finalNum <= 264) { // Checks the 200's (One statment containted within)
      this.finalNum = 232;
    } else if (finalNum > 700 && finalNum < 800) { // Checks the 700's (Three checks contained within)
      if (finalNum === 724) {
        this.finalNum = 723;
      } else if ( finalNum === 734) {
        this.finalNum = 733;
      } else if (finalNum > 752 && finalNum <= 764) {
        this.finalNum = 752;
      }
    } else if (finalNum > 600 && finalNum < 700) { // Checks the 600's (Four checks containted within)
      if (finalNum === 624) {
        this.finalNum = 623;
      } else if (finalNum === 644) {
        this.finalNum = 643;
      } else if (finalNum === 663) {
        this.finalNum = 662;
      } else if (finalNum > 651 && finalNum <= 653) {
        this.finalNum = 651;
      }
    } else if (finalNum > 800 && finalNum < 900) { // Check 800's (Four checks containted within)
      if (finalNum === 823) {
        this.finalNum = 822;
      } else if (finalNum === 844) {
        this.finalNum = 843;
      } else if (finalNum > 851 && finalNum <= 853) {
        this.finalNum = 851;
      } else if (finalNum > 862 && finalNum <= 864) {
        this.finalNum = 862;
      }
    }
  }

  idverity (num: number) {
    const range = this.invalid.length;
    for (let i = 0; i < range; i++) {
      if (this.finalNum === this.invalid[i]) {
          this.stage = 9;
      }
    }
  }

  // Code for error return button (Stage 9)
  homeButton(): void {
    window.location.reload();
  }

  // stepBack function for 3 key component
  stepBack(): void {
    // If first stage, just clear finalNum
    if (this.stage === 2) {
      this.finalNum = 0;
      this.stage--;
    } else if (this.stage === 3) { // Remove 2nd digit for 2nd stage
      this.finalNum = this.finalNum / 100;
      this.finalNum = Math.floor(this.finalNum);
      this.finalNum = this.finalNum * 100;
      this.stage--;
    } else if (this.stage === 4) { // Remove 3rd digit for 3rd stage
      this.finalNum = this.finalNum / 10;
      this.finalNum = Math.floor(this.finalNum);
      this.finalNum = this.finalNum * 10;
      this.stage--;
    } else if (this.stage === 6) { // Deal with Goldenrod/Aster case
      this.finalNum = 0;
      this.stage = 1;
    } else if (this.stage === 9) {
      this.finalNum = this.finalNum / 10;
      this.finalNum = Math.floor(this.finalNum);
      this.finalNum = this.finalNum * 10;
      this.stage = 3;
    }
  }
}
