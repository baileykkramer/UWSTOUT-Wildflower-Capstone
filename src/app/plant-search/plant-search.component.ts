import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PHPService } from '../php-service.service';
import { Plant } from '../plant';
import { ResultsService } from '../results/results.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: ['./plant-search.component.css']
})
export class PlantSearchComponent implements OnInit {
  familyList = [
    {'value': -1, 'name': 'Select a family...'},
    {'value': 1, 'name': 'Acanthus'},
    {'value': 2, 'name': 'Amaranth'},
    {'value': 3, 'name': 'Amaryllis'},
    {'value': 4, 'name': 'Arum'},
    {'value': 5, 'name': 'Barberry'},
    {'value': 6, 'name': 'Bignonia'},
    {'value': 7, 'name': 'Birthwort'},
    {'value': 8, 'name': 'Bladdernut'},
    {'value': 9, 'name': 'Bladderwort'},
    {'value': 10, 'name': 'Bloodwort'},
    {'value': 11, 'name': 'Bluebell'},
    {'value': 12, 'name': 'Borage'},
    {'value': 13, 'name': 'Broomrape'},
    {'value': 14, 'name': 'Buckthorn'},
    {'value': 15, 'name': 'Buckwheat'},
    {'value': 16, 'name': 'Bur Reed'},
    {'value': 17, 'name': 'Buttercup'},
    {'value': 18, 'name': 'Cactus'},
    {'value': 19, 'name': 'Caper'},
    {'value': 20, 'name': 'Carpetweed'},
    {'value': 21, 'name': 'Cashew'},
    {'value': 22, 'name': 'Cattail'},
    {'value': 23, 'name': 'Composite'},
    {'value': 24, 'name': 'Crowberry'},
    {'value': 25, 'name': 'Diapensia'},
    {'value': 26, 'name': 'Dogbane'},
    {'value': 27, 'name': 'Dogwood'},
    {'value': 28, 'name': 'Evening Primrose'},
    {'value': 29, 'name': 'False Mermaid'},
    {'value': 30, 'name': 'Figwort'},
    {'value': 31, 'name': 'Flax'},
    {'value': 32, 'name': 'Flowering Rush'},
    {'value': 33, 'name': 'Four-o\'clock'},
    {'value': 34, 'name': 'Gentian'},
    {'value': 35, 'name': 'Geranium'},
    {'value': 36, 'name': 'Ginseng'},
    {'value': 37, 'name': 'Goosefoot'},
    {'value': 38, 'name': 'Gourd'},
    {'value': 39, 'name': 'Grape'},
    {'value': 40, 'name': 'Heath'},
    {'value': 41, 'name': 'Hemp'},
    {'value': 42, 'name': 'Holly'},
    {'value': 43, 'name': 'Honeysuckle'},
    {'value': 44, 'name': 'Iris'},
    {'value': 45, 'name': 'Laurel'},
    {'value': 46, 'name': 'Leadwort'},
    {'value': 47, 'name': 'Lily'},
    {'value': 48, 'name': 'Lizard\'s Tail'},
    {'value': 49, 'name': 'Lobelia'},
    {'value': 50, 'name': 'Loosestrife'},
    {'value': 51, 'name': 'Lopseed'},
    {'value': 52, 'name': 'Madder'},
    {'value': 53, 'name': 'Magnolia'},
    {'value': 54, 'name': 'Mallow'},
    {'value': 55, 'name': 'Meadow Beauty'},
    {'value': 56, 'name': 'Mezereum'},
    {'value': 57, 'name': 'Milkweed'},
    {'value': 58, 'name': 'Milkwort'},
    {'value': 59, 'name': 'Mint'},
    {'value': 60, 'name': 'Moonseed'},
    {'value': 61, 'name': 'Morning Glory'},
    {'value': 62, 'name': 'Mustard'},
    {'value': 63, 'name': 'Nettle'},
    {'value': 64, 'name': 'Nightshade'},
    {'value': 65, 'name': 'Olive'},
    {'value': 66, 'name': 'Orchids'},
    {'value': 67, 'name': 'Parsley'},
    {'value': 68, 'name': 'Passionflower'},
    {'value': 69, 'name': 'Pea'},
    {'value': 70, 'name': 'Phlox'},
    {'value': 71, 'name': 'Pickerelweed'},
    {'value': 72, 'name': 'Pink'},
    {'value': 73, 'name': 'Pipewort'},
    {'value': 74, 'name': 'Pitcher'},
    {'value': 105, 'name': 'Plantain'},
    {'value': 75, 'name': 'Pokeweed'},
    {'value': 76, 'name': 'Poppy'},
    {'value': 77, 'name': 'Primrose'},
    {'value': 78, 'name': 'Purslane'},
    {'value': 79, 'name': 'Pyrola'},
    {'value': 80, 'name': 'Rockrose'},
    {'value': 81, 'name': 'Rose'},
    {'value': 82, 'name': 'Rue'},
    {'value': 83, 'name': 'Sandalwood'},
    {'value': 84, 'name': 'Saxifrage'},
    {'value': 85, 'name': 'Sedum'},
    {'value': 86, 'name': 'Spiderwort'},
    {'value': 87, 'name': 'Spurge'},
    {'value': 88, 'name': 'St. Johnswort'},
    {'value': 89, 'name': 'Staff Tree'},
    {'value': 90, 'name': 'Stonecrop'},
    {'value': 91, 'name': 'Sundew'},
    {'value': 92, 'name': 'Teasel'},
    {'value': 93, 'name': 'Touch-me-not'},
    {'value': 94, 'name': 'Valerian'},
    {'value': 95, 'name': 'Vervain'},
    {'value': 96, 'name': 'Violet'},
    {'value': 97, 'name': 'Water Lily'},
    {'value': 98, 'name': 'Water Milfoil'},
    {'value': 99, 'name': 'Water Plantain'},
    {'value': 100, 'name': 'Waterleaf'},
    {'value': 101, 'name': 'White Alder'},
    {'value': 106, 'name': 'Witch Holly'},
    {'value': 102, 'name': 'Wood Sorrel'},
    {'value': 103, 'name': 'Yam'},
    {'value': 104, 'name': 'Yellow-eyed Grass'},
  ];
  flowerType = 
  [
    {type: 'Not specified', code: -1, selected: true},
    { type: 'Irregular Flowers', code: 1, selected: false},
    { type: '2 Regular Parts', code: 2, selected: false},
    { type: '3 Regular Parts', code: 3, selected: false},
    { type: '4 Regular Parts', code: 4, selected: false},
    { type: '5 Regular Parts', code: 5, selected: false},
    { type: '6 Regular Parts', code: 6, selected: false},
    { type: '7 or More Regular Parts', code: 7, selected: false},
    { type: 'Parts Indistinguishable', code: 8, selected: false},
    {type: 'Goldenrod (Solidago)', code: 9, selected: false},
    {type: 'Aster', code: 9.01, selected: false}
  ];
  plantType = 
  [
    {type: 'Not specified', code: -1, selected: true},
    {type: 'No Apparent Leaves', code: 1, selected: false},
    {type: 'Basal Leaves Only', code: 2, selected: false},
    {type: 'Alternate Leaves', code: 3, selected: false},
    {type: 'Opposite or Whorled Leaves', code: 4, selected: false},
    {type: 'Shrubs', code: 5, selected: false},
    {type: 'Vines', code: 6, selected: false}
  ];

  leafType = 
  [
    {type: 'Not specified', code: -1, selected: true},
    {type: 'No apparent Leaves', code: 1, selected: false},
    {type: 'Leaves Entire', code: 2, selected: false},
    {type: 'Leaves Toothed or Lobed', code: 3, selected: false},
    {type: 'Leaves Divided', code: 4, selected: false}
  ];
  answers: Plant[]
  familyName: number
  plantNum: number
  flowerNum: number
  leafNum: number
  comName: string
  sciName: string
  selectedFamily = this.familyList[0];
  defaults = false;

  constructor(private php: PHPService, private results: ResultsService, private router: Router) { }
  
  ngOnInit() {
    //Set the variables to -1 initially
    this.familyName = -1;
    this.plantNum =-1;
    this.flowerNum = -1;
    this.leafNum = -1;
  }

  familyNameSelect(event){
    this.familyName = event.target.value
    console.log(this.familyName)
  }
  flowerNumSelect(event, i){
    this.flowerNum = event.target.value
    console.log(this.flowerNum)
    //iterating through buttons to set to unclicked
    this.flowerType.forEach(element => {
      element.selected = false;
    });
    //set the clicked on one to true(selected)
    this.flowerType[i].selected = true;
  }
  plantNumSelect(event, i){
    this.plantNum = event.target.value
    console.log(this.plantNum)
    //iterating through buttons to set to unclicked
    this.plantType.forEach(element => {
      element.selected = false;
    });
    //set the clicked on one to true(selected)
    this.plantType[i].selected = true;
  }
  leafNumSelect(event, i){
    this.leafNum = event.target.value
    console.log(this.leafNum)
    //iterating through buttons to set to unclicked
    this.leafType.forEach(element => {
      element.selected = false;
    });
    //set the clicked on one to true(selected)
    this.leafType[i].selected = true;
  }

  submit(sci:string, com:string) {
    this.sciName = sci
    this.comName = com
    //console.log(this.sciName, this.comName)
    console.log('sciName', this.sciName, 'comName', this.comName, 'familyName', this.familyName, 'flowerNum', this.flowerNum, 'plantNum', this.plantNum, 'leafNum', this.leafNum)
    if(this.sciName == "" && this.comName == "" &&  this.familyName == -1 && this.flowerNum ==-1 && this.plantNum == -1 && this.leafNum ==-1){
      this.defaults = true;
    }
    else{
      this.defaults = false;
      this.php.plantSearch(this.sciName, this.comName, this.familyName, this.flowerNum, this.plantNum, this.leafNum).subscribe(
        (data) => {
          const answer = data.json();
          this.answers = answer;
        }, (err) => { console.log('Error', err); },
        () => {
          this.results.setPlants(this.answers, 0);
          this.router.navigate(['results']);
        }
      );
    }
  }

}
