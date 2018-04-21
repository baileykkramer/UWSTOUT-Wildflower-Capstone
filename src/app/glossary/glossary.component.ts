import { Component, OnInit } from '@angular/core';
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

    // as characters are typed into the glossary Search input field items are filtered by looking at items belonging to the termItem class
    $('#glossarySearchInput').on('keyup', function() {
      const value = $(this).val().toLowerCase();
        $('.termItem').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });

  }

}
