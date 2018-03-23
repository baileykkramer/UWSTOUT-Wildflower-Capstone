import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  plants: Plant[];

  constructor(private results: ResultsService) { }

  // getting the plants to display
  ngOnInit() {
    this.plants = this.results.getPlants();
  }

}
