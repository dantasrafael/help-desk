import { SharedService } from './services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  showTemplate: boolean = false;
=======

  public showTemplate: boolean = false;
>>>>>>> 5ee830f679b72bff08eca3a561abaa65eb7589f2
  public shared: SharedService;
  
  constructor() {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
<<<<<<< HEAD
    )
=======
    );
  }

  showContentWrapper() {
    return {
      'content-wrapper': this.shared.isLoggedIn()
    }
>>>>>>> 5ee830f679b72bff08eca3a561abaa65eb7589f2
  }
}
