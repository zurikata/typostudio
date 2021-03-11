import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturedServicesQuery, ServiceQuery } from 'src/generated/graphql';
import { PageService } from 'src/app/services/page.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  imgURL = environment.imagesUrl;

  pageId: any;

  services: FeaturedServicesQuery['services'];

  service: ServiceQuery['service'];
  relatedWorks: ServiceQuery['service']['related_works'];



  constructor( private route: ActivatedRoute, private pageService: PageService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pageId = params.get('id');
      this.getService(this.pageId);
      this.getServices();
    })
  }

  getServices(): void {
    this.pageService.getFeaturedServicesInfo().valueChanges.subscribe(({ data }) => {
      this.services = data.services;

    });
  }

  getService(id: any): void {
    this.pageService.getService(id).valueChanges.subscribe(({ data }) => {
      this.service = data.service;
      this.relatedWorks = this.service?.related_works;
    });
  }

}
