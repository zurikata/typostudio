import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {

  services = [
    {
      slug:"branding",
      title:"Identidad // Rehabilitación de marca",
      subtitle:"BRANDING",
      imageURL:"branding-img.png",
      description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor."
    },
    {
      slug:"estrategia",
      title:"Planeación // Concepto",
      subtitle:"ESTRATEGIA",
      imageURL:"estrategia-img.png",
      description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor."
    },
    {
      slug:"online",
      title:"Web marketing // Desarrollo Web",
      subtitle:"ONLINE",
      imageURL:"online-img.png",
      description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor."
    },
    {
      slug:"offline",
      title:"Campaña // Diseño",
      subtitle:"OFFLINE",
      imageURL:"offline-img.png",
      description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor."
    },
    {
      slug:"corporativo-y-negocio",
      title:"Finanzas // Comercial",
      subtitle:"CORPORATIVO Y NEGOCIO",
      imageURL:"corporativo-img.png",
      description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor."
    },
    {
      slug:"legal",
      title:"Derechos de autor // Asesoría ",
      subtitle:"LEGAL",
      imageURL:"legal-img.png",
      description:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor."
    },

  ]
  
  constructor() { }

  ngOnInit(): void {
  }


}
