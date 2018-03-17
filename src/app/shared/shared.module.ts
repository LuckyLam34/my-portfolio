import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { EndpointService } from './endpoint.service';
import { LevelWidgetComponent } from './level-widget/level-widget.component';
import { MediaWidgetComponent } from './media-widget/media-widget.component';
import { ScrollnextWidgetComponent } from './scrollnext-widget/scrollnext-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LevelWidgetComponent, MediaWidgetComponent, ScrollnextWidgetComponent],
  exports: [LevelWidgetComponent, MediaWidgetComponent, ScrollnextWidgetComponent],
  providers: [HelperService, EndpointService]
})
export class SharedModule { }
