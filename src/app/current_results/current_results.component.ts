import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { PHPService } from '../php-service.service';
import { Router } from '@angular/router';
import { ResultsService } from '../results/results.service';
import { Plant } from '../plant';
 
 
@Component({
    selector: 'app-current_results',
    templateUrl: './current_results.component.html',
    //styleUrls: ['./cresults.component.css']
  })
  export class CurrentResults implements OnInit {
  
   // function to be called when button is pushed
    @Input() codeNum: number;
    setNum = 0;
    questions: Question[];
    answers: Plant[];

    constructor() { }
  
    ngOnInit() {}
  
  }




 // function that calls the php to get the resultID



 // Converter for when resultID is returned in an array (converts to plantID)



 // Function to send the plantID array to the result page

 //<app-plant [codeNum]=finalNum></app-question-generate>