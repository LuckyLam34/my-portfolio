import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'trinhlam-portfolio-scrollnext-widget',
  templateUrl: './scrollnext-widget.component.html',
  styleUrls: ['./scrollnext-widget.component.scss']
})
export class ScrollnextWidgetComponent implements OnInit {

  constructor() { }

  isShown: boolean = true;

  ngOnInit() {
    if ($(window).height() + 100 > $(document).height()) {
      this.isShown = false;
    }

    $(window).scroll(() => {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 230) {
        this.isShown = false;
      } else {
        this.isShown = true;
      }
    });
  }

}
