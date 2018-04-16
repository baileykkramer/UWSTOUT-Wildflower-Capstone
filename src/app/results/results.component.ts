import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { Plant } from '../plant';
import * as _ from 'underscore';
import { PagerService } from './services/index';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  plants: Plant[];
  pagedPlants: Plant[];
  pager: any = {};
  size = 10;
  currentPage = 1;

  constructor(private results: ResultsService, private pagerService: PagerService) { }

  // getting the plants to display
  ngOnInit() {
    this.plants = this.results.getPlants();
    this.setPage(this.currentPage);
    // this.size = 10;
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      page = 1;
    }

    this.currentPage = page;
    console.log(this.size);

    // get pager object from service
    this.pager = this.pagerService.getPager(this.plants.length, page, this.size);

    // get current page of items
    this.pagedPlants = this.plants.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  select(event) {
    this.size = Number(event.target.value);
    this.currentPage = 1;

    // get pager object from service
    this.pager = this.pagerService.getPager(this.plants.length, this.currentPage, this.size);

    // get current page of items
    this.pagedPlants = this.plants.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
