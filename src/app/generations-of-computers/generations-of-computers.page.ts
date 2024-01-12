import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generations-of-computers',
  templateUrl: './generations-of-computers.page.html',
  styleUrls: ['./generations-of-computers.page.scss'],
})
export class GenerationsOfComputersPage {

  constructor(private router: Router) {}

  // Define yourButtonClickHandler method
  forwardButtonClickHandler() {
    // Your button click logic goes here
    this.router.navigate(['/types-of-computer-memory']);
    console.log('Button clicked!');
  }


}
