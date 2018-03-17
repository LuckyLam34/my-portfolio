import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

// window['jQuery'] = window['$'] = $;
(<any>window).jQuery = (<any>window).$ = $;

@Component({
  selector: 'trinhlam-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'trinhlam-portfolio';

  ngOnInit() {
    this.initMenu();
  }

  initMenu() {
    const toggle = document.querySelectorAll(".toggle")[0];
    const nav = document.querySelectorAll("nav")[0];
    const toggle_open_text = '<i class="fa fa-bars"></i>';
    const toggle_close_text = '<i class="fa fa-times"></i>';

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');

      if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
      } else {
        toggle.innerHTML = toggle_open_text;
      }
    }, false);

    setTimeout(function () {
      nav.classList.toggle('open');
    }, 800);
  }
}
