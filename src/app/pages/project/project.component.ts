import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  pageSlug:any;

  services = [
    {name:"Branding",slug:"branding"},
    {name:"Estrategia",slug:"estrategia"},
    {name:"ONLINE",slug:"online"},
    {name:"OFFLINE",slug:"offline"},

  ]
  
  heroImg = "/assets/images/comware-hero-img.png";

  projectName = "COMWARE"

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

  constructor() { }

  ngOnInit(): void {
  }

}
