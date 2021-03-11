import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;

  carouselInfo = [
    {
      title:"<strong>COMUNÍCATE</strong> CON TU PÚBLICO",
      uri:"",
      featuredImage:"/assets/images/hero-img-01.png"
    },
    {
      title:"GENERA <strong>VÍNCULOS</strong>",
      uri:"",
      featuredImage:"/assets/images/hero-img-02.png"
    },
    {
      title:"<strong>EXPERIENCIAS</strong> QUE CREAN",
      uri:"",
      featuredImage:"/assets/images/hero-img-03.png"
    },
    {
      title:"COMUNICACIÓN QUE <strong>INSPIRAN</strong>",
      uri:"",
      featuredImage:"/assets/images/hero-img-04.png"
    },
  ]


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
