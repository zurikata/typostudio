import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-work',
  templateUrl: './service-work.component.html',
  styleUrls: ['./service-work.component.scss']
})
export class ServiceWorkComponent implements OnInit {

  imgUrl = environment.imagesUrl;

  @Input() relatedWorks:any;

  constructor() { }

  ngOnInit(): void {
  }

}
