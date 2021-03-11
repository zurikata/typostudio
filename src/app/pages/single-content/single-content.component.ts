import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-content',
  templateUrl: './single-content.component.html',
  styleUrls: ['./single-content.component.scss']
})
export class SingleContentComponent implements OnInit {

  imgURL = environment.imagesUrl;

  page:any = this.route.data["_value"]['page'];

  constructor(private route:ActivatedRoute, private pageService:PageService) { }

  data: any = {};
  

  ngOnInit(): void {

    switch(this.page){
      case "clientes" : {
        this.getClientes();
        break;
      }
      case "equipo" :{
        this.getEquipo();
        break;
      }
      case "redColaboracion" :{
        this.getRedColaboracion();
        break;
      }
    }

  }

  getClientes(): void {
    this.pageService.getClientes().valueChanges.subscribe(({ data }) => {
      this.data = data.cliente;

    });
  }

  getEquipo(): void {
    this.pageService.getEquipo().valueChanges.subscribe(({ data }) => {
      this.data = data.equipo;

    });
  }

  getRedColaboracion(): void {
    this.pageService.getRedColaboracion().valueChanges.subscribe(({ data }) => {
      this.data = data.redColaboracion;

    });
  }

}
