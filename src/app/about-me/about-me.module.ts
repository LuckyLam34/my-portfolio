import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeService } from '../services/about-me.service';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutMeComponent],
  providers: [AboutMeService]
})
export class AboutMeModule { }
