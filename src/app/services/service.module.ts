import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from './skills.service';
import { AboutMeService } from './about-me.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SkillsService, AboutMeService]
})
export class ServiceModule { }
