import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { FeaturedServicesQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  services: FeaturedServicesQuery['services'];

  constructor(
    private pageService:PageService
  ) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.pageService.getFeaturedServicesInfo().valueChanges.subscribe(({ data }) => {
      this.services = data.services;

    });
  }

}
