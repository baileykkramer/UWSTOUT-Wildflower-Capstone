import { Component, OnInit } from '@angular/core';
import { PHPService } from '../php-service.service';
import { Term } from '../term';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {

  terms: Term[];

  constructor(private php: PHPService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.php.getGlossary().subscribe(
      (data) => {
        const returnedTerms = data.json();
        this.terms = returnedTerms;
      }, (err) => { console.log('Error', err); },
      () => {
        console.log(this.terms);
      }
    );

  }

}
