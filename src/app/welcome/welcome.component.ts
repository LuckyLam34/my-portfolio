import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'trinhlam-portfolio-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    AOS.init({
      duration: 1200
    });
  }

  goAboutMe() {
    this.router.navigate(['/about-me']);
  }

}
