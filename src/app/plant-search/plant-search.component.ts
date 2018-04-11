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
    {'value': 0, 'name': 'Select a family'},
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
  answers: Plant[]
  selectedFamily = this.familyList[0];

  constructor(private php: PHPService, private results: ResultsService, private router: Router) { }

  ngOnInit() {
  }

  select(event){
    // console.log(family.target.value);
    //
    this.php.plantSearch(event.target.value).subscribe(
      (data) => {
        const answer = data.json();
        this.answers = answer;
      }, (err) => { console.log('Error', err); },
      () => {
      }
    );
  }

  submit() {
    this.results.setPlants(this.answers);
    this.router.navigate(['results']);
  }

}
