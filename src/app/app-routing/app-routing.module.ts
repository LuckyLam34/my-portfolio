import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from '../welcome/welcome.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
