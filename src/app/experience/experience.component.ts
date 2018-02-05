import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as AOS from 'aos';
import { AboutMeService } from '../services/about-me.service';

@Component({
  selector: 'trinhlam-portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [];
  abcd = 'ac';

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit() {
    this.getExperiences();
    AOS.init({
      duration: 1200
    });
  }

  getExperiences() {
    this.aboutMeService.getExperiences()
      .subscribe(data => {
        console.log(data);
        for (let key in data) {
          this.experiences.push(data[key]);
          data[key]['responsibilities'] = this.convertStringToArray(data[key]['responsibilities']);
        }
      },
      error => console.error('Error!!!'));
  }

  private convertStringToArray(fromString: string): string[] {
    let toArray: string[] = [];

    return _.split(fromString, ';');
  }
}
