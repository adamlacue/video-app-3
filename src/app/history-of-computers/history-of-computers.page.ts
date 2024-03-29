import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-of-computers',
  templateUrl: './history-of-computers.page.html',
  styleUrls: ['./history-of-computers.page.scss'],
})
export class HistoryOfComputersPage {

  constructor(private router: Router) {}

  // Define yourButtonClickHandler method
  forwardButtonClickHandler() {
    // Your button click logic goes here
    this.router.navigate(['/generations-of-computers']);
    console.log('Button clicked!');
  }


}
