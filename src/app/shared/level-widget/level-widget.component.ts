import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'trinhlam-portfolio-level-widget',
  templateUrl: './level-widget.component.html',
  styleUrls: ['./level-widget.component.scss']
})
export class LevelWidgetComponent implements OnInit {

  @Input()
  imgUrl: string;

  @Input()
  widgetName: string;

  @Input()
  level: number;

  id: string;

  constructor() { }

  ngOnInit() {
    this.id = Math.floor(Math.random() * 10000) + '';

    $(document).ready(() => {
      const stars = $('#' + this.id);

      for (let i = 0; i < +this.level; i++) {
        $($(stars[0]).children()[i]).addClass('yellow-star');
      }
    })
  }

}
