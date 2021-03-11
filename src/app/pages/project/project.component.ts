import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { environment } from 'src/environments/environment';
import { FeaturedServicesQuery, ProjectQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  imgURL = environment.imagesUrl;

  pageId:any;

  services: FeaturedServicesQuery['services'];

  project: ProjectQuery['project'];

  imgSections: ProjectQuery['project']['images'];



  projectDescription = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum. "
  
  serviceName ="BRANDING";

  serviceKeywords = [
    "Rehabilitación de marca",
    "Sistema gráfico",  
    "Diseño web",
    "Implementación"
  ]

  projectKeywords = [
    "Your technology advisors",
    "Tecnología Compañía consultora 2017"
  ]

  constructor(
    private route:ActivatedRoute,
    private pageService:PageService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.pageId = params.get('id');
      this.getServices();
      this.getProject(this.pageId);
    })
  }

  getServices(): void {
    this.pageService.getFeaturedServicesInfo().valueChanges.subscribe(({ data }) => {
      this.services = data.services;
    });
  }

  getProject(id: any): void {
    this.pageService.getProject(id).valueChanges.subscribe(({ data }) => {
      this.project = data.project;
      this.imgSections = this.project.images;

    });
  }

}
