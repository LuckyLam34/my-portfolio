import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';

import { AboutMeModule } from './about-me/about-me.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactModule } from './contact/contact.module';
import { SkillsComponent } from './skills/skills.component';
import { ServiceModule } from './services/service.module';
import { ExperienceComponent } from './experience/experience.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    AboutMeModule,
    ContactModule,
    ServiceModule,
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
