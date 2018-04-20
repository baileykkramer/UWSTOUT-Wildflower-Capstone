import { Injectable } from '@angular/core';
import { Plant } from '../../plant'

@Injectable()
export class PlantQuizService {
  plants: Plant[];

  constructor() { }

  public setPlants(newPlants: Plant[]) {
    this.plants = newPlants;
  }

  public getPlants(): Plant[] {
    return this.plants;
  }

}