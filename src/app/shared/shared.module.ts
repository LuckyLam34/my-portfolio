import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { EndpointService } from './endpoint.service';
import { LevelWidgetComponent } from './level-widget/level-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LevelWidgetComponent],
  providers: [HelperService, EndpointService]
})
export class SharedModule { }
