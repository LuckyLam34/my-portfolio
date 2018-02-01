import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'trinhlam-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [SkillsService]
})
export class SkillsComponent implements OnInit {

  skills: any[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkills()
      .subscribe(data => {
        console.log(data);
        this.skills = data;
      });
  }

}
