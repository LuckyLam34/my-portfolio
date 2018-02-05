import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import * as AOS from 'aos';

@Component({
  selector: 'trinhlam-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
    AOS.init({
      duration: 1200
    });
  }

  getSkills() {
    this.skillsService.getSkills()
      .subscribe(data => {
        for (let key in data) {
          this.skills.push(data[key]);
        }
      });
  }
}
