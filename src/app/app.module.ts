import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MasterComponent } from './shared/master/master.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeServicesComponent } from './pages/home/home-services/home-services.component';
import { ServiceComponent } from './pages/service/service.component';
import { HomeHeroComponent } from './pages/home/home-hero/home-hero.component';
import { HomePortfolioComponent } from './pages/home/home-portfolio/home-portfolio.component';
import { HomeContactComponent } from './pages/home/home-contact/home-contact.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectContentComponent } from './pages/project/project-content/project-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    HomeServicesComponent,
    ServiceComponent,
    HomeHeroComponent,
    HomePortfolioComponent,
    HomeContactComponent,

    ProjectComponent,
    ProjectContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
