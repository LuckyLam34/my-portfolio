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

    setInterval(() => {
      AOS.init({
        duration: 1200
      });
    }, 2000);

    this.aboutMeService.getExperiences()
      .subscribe(data => {
        for (let key in data) {
          this.experiences.push(data[key]);
          data[key]['responsibilities'] = this.convertStringToArray(data[key]['responsibilities']);
        }
      },
      error => console.error('Error!!!'));
  }

  goNext() {
    $(document).ready(() => {
      $('html, body').animate({
        scrollTop: $('#career').offset().top
      }, 1000);
    });
  }

  private convertStringToArray(fromString: string): string[] {
    let toArray: string[] = [];

    return _.split(fromString, ';');
  }
}
