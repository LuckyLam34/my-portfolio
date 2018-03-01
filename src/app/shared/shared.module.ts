import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { EndpointService } from './endpoint.service';
import { LevelWidgetComponent } from './level-widget/level-widget.component';
import { MediaWidgetComponent } from './media-widget/media-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LevelWidgetComponent, MediaWidgetComponent],
  exports: [LevelWidgetComponent, MediaWidgetComponent],
  providers: [HelperService, EndpointService]
})
export class SharedModule { }
