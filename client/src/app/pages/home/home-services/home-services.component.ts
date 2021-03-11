import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {

  imgUrl = environment.imagesUrl;

  @Input() services; 
  
  constructor() { }

  ngOnInit(): void {

  }


}
