import { Component, OnInit } from '@angular/core';
import * as AOS from '../../../node_modules/aos/dist/aos';

@Component({
  selector: 'trinhlam-portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200
    });
  }

}
