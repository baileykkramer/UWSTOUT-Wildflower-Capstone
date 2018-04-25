import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PHPService } from '../php-service.service';
import { Term } from '../term';

declare var $: any;

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {

  terms: Term[];
  filteredTerms: Term[];
  pattern = '.*';


  constructor(private php: PHPService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.php.getGlossary().subscribe(
      (data) => {
        const returnedTerms = data.json();
        this.terms = returnedTerms;
        this.filteredTerms = this.terms;
      }, (err) => { console.log('Error', err); },
      () => {
        console.log(this.terms);
      }
    );
  }

  private filterList(inputValue: string) {
    // populate the filteredTerms with terms that match input
    this.filteredTerms = this.terms.filter(
      term => (
        // compares the word with the input and includes it if it contains
        // what is in the input bar
        term.word.match(new RegExp(inputValue.concat(this.pattern), 'i'))
      )
    );
    // if there is nothing in the search bar show all terms
    if (inputValue === '') { this.filteredTerms = this.terms; }
  }

}
