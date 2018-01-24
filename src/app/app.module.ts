import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';

import { AboutMeModule } from './about-me/about-me.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AboutMeModule,
    ContactModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
