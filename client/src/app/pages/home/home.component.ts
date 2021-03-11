import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { environment } from 'src/environments/environment';
import { FeaturedServicesQuery, ProjectsInfoQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagesUrl = environment.imagesUrl;

  services$: FeaturedServicesQuery['services'];

  projects$: ProjectsInfoQuery['projects'];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {

    this.pageService.getFeaturedServicesInfo().valueChanges.subscribe(({ data }) => {

      this.services$ = data.services;
    });

    this.pageService.getProjectsInfo().valueChanges.subscribe(({ data }) => {
      this.projects$ = data.projects;
    });

  }




}
