import { Component, OnInit } from '@angular/core';
import { PHPService } from './php-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wildflower Guide';

  constructor(private php: PHPService) { }

  homeButton(): void {
    window.location.reload();
  }
}

