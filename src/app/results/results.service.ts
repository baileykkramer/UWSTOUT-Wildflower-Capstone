import { Injectable } from '@angular/core';
import { Plant } from '../plant';

@Injectable()
export class ResultsService {
  plants: Plant[];
  whereFrom: number;

  constructor() { }

  public setPlants(newPlants: Plant[], whereFrom: number) {
    this.plants = newPlants;
    this.whereFrom = whereFrom;
  }

  public getPlants(): Plant[] {
    return this.plants;
  }

  public getWhereFrom(): number {
    return this.whereFrom;
  }

}
