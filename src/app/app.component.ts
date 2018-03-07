import { Component, OnInit } from '@angular/core';
import { PHPService } from './php-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Wildflower Guide';
=======
  title = 'Newcombs Wildflower Guide';

  constructor(private php: PHPService) { }

>>>>>>> 474776f72e756ca17cf8d4380538cbd827f2d325
  homeButton(): void {
    window.location.reload();
  }
}

