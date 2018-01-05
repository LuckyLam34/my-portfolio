import { Component, OnInit } from '@angular/core';
import * as AOS from '../../../node_modules/aos/dist/aos';
import { AboutMeService } from '../services/about-me.service';
import * as _ from 'lodash';

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

    this.aboutMeService.getExperiences()
      .subscribe(data => {
        for (let key in data) {
          this.experiences.push(data[key]);
        }
      },
      error => console.error('Shit happened!'));
  }

}
