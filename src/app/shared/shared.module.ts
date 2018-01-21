import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { EndpointService } from './endpoint.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HelperService, EndpointService]
})
export class SharedModule { }
