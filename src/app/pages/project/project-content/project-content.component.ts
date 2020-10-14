import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {

  container= true;

  imgSections = [
    {section:"gallery", images:[
      {url:"/assets/images/comware-img-01.png", gridColumn:"1/3", gridRow:"1"},
      {url:"/assets/images/comware-img-02.png", gridColumn:"1", gridRow:"2"},
      {url:"/assets/images/comware-img-03.png", gridColumn:"2", gridRow:"2"},
    ]},
    { section:"banner", url:"/assets/images/comware-img-04.png"},
    {section:"gallery", images:[
      {url:"/assets/images/comware-img-05.png", gridColumn:"1/3", gridRow:"1"},
    ]},
    { section:"banner", url:"/assets/images/comware-img-06.png"},
    {section:"gallery", images:[
      {url:"/assets/images/comware-img-07.png", gridColumn:"1", gridRow:"1"},
      {url:"/assets/images/comware-img-08.png", gridColumn:"2", gridRow:"1"},
      {url:"/assets/images/comware-img-09.png", gridColumn:"1", gridRow:"2"},
      {url:"/assets/images/comware-img-10.png", gridColumn:"2", gridRow:"2"},
    ]},
    { section:"banner", url:"/assets/images/comware-img-11.png"},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
