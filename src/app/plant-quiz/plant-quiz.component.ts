import { Component, OnInit } from '@angular/core';
//import { PlantQuizService } from './plant-quiz.service';
import { Plant } from '../plant'

@Component({
  selector: 'app-plant-quiz',
  templateUrl: './plant-quiz.component.html',
  styleUrls: ['./plant-quiz.component.css']
})
export class PlantQuizComponent implements OnInit {
  plants: Plant[]
  min: number
  max: number
  ids: number[]

  //constructor(private answers: PlantQuizService) { }

  ngOnInit() {
    // Generate 4 valid id's
    var i = 0;
    var rand;
    this.min = 100;
    this.max = 1000;
    while(i < 4) {
      rand = Math.floor(1000 * Math.random());
      console.log(rand)
      if(rand > this.min && rand < this.max){
        this.ids[i] = rand;
        i++;
      }
    }

    //Fill plants[] with plant info
  }

  submit() {

  }
}
