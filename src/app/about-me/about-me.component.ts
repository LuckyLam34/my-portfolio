import { Component, OnInit } from '@angular/core';
import * as AOS from '../../../node_modules/aos/dist/aos';
import { AboutMeService } from '../services/about-me.service';
import * as _ from 'lodash';
import * as $ from 'jquery';

@Component({
  selector: 'trinhlam-portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  experiences: any = [];

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit() {
    AOS.init({
      duration: 1200
    });

    $(document).ready(() => console.log($));

    setInterval(() => {
      AOS.init({
        duration: 1200
      });
    }, 1000);

    this.aboutMeService.getExperiences()
      .subscribe(data => {
        for (let key in data) {
          this.experiences.push(data[key]);
        }
      },
      error => console.error('Error!!!'));
  }

}
