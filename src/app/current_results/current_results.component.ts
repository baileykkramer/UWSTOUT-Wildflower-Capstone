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