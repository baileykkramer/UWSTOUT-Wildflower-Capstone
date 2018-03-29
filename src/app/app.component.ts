import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wildflower Guide';

  constructor(private router: Router) { }

  homeButton(): void {
    this.router.navigate(['bounce']);
  }
}

