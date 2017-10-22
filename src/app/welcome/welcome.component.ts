import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';

@Component({
  selector: 'trinhlam-portfolio-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  goAboutMe() {
    this.router.navigate(['/about-me']);
  }

}
