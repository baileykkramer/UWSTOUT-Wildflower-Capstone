import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { Plant } from '../plant';
import * as _ from 'underscore';
import { PagerService } from './../pagination/index';

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
  hasPlants = false;
  whereFrom: number;

  constructor(private results: ResultsService, private pagerService: PagerService) { }

  // getting the plants to display
  ngOnInit() {
    this.plants = this.results.getPlants();
    this.whereFrom = this.results.getWhereFrom();
    if (this.plants) {
      this.hasPlants = true;
      this.setPage(this.currentPage);
      this.plants.forEach(function(plant) {
        plant.selected = false;
      });
    }
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      page = 1;
    }
    this.currentPage = page;

    // get pager object from service
    this.pager = this.pagerService.getPager(this.plants.length, page, this.size);

    // get current page of items
    this.pagedPlants = this.plants.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  select(num: number) {
    this.size = Number(num);
    this.currentPage = 1;

    // get pager object from service
    this.pager = this.pagerService.getPager(this.plants.length, this.currentPage, this.size);

    // get current page of items
    this.pagedPlants = this.plants.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  unselect() {
    this.plants.forEach(element => {
      element.selected = false;
    });
  }
}
