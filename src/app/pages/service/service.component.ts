import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  pageSlug:any;

  services = [
    {name:"Branding",slug:"branding"},
    {name:"Estrategia",slug:"estrategia"},
    {name:"ONLINE",slug:"online"},
    {name:"OFFLINE",slug:"offline"},

  ]
  
  heroImg = "/assets/images/svc-branding-img.png";

  serviceName = "BRANDING"

  serviceDescription = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum. "
  
  serviceKeywords = [
    "Desarrollo de marca",
    "Rehabilitación de marca",
    "Identidad gráfica",
    "Sistema",
    "Filosofía de marca",
    "Implementación"
  ]


  constructor(
    private route:ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.pageSlug = params.get('slug');
    })
  }

}
