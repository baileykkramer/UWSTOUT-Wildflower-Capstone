import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bounce',
  templateUrl: './bounce.component.html',
  styleUrls: ['./bounce.component.css']
})
export class BounceComponent implements OnInit {

  constructor(private router: Router) { }
  // the only purpose of this component is to act as a relay for routing when trying clicking the home button on the main page
  // there's probably a better way of doing this, but 'if it's stupid but it works, it isn't stupid'
  ngOnInit() {
    this.router.navigate(['classification']);
  }

}
