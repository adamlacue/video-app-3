import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  // Define yourButtonClickHandler method
  forwardButtonClickHandler() {
    // Your button click logic goes here
    this.router.navigate(['/history-of-computers']);
    console.log('Button clicked!');
  }


}
