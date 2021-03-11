import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})
export class HomePortfolioComponent implements OnInit {

  imgUrl = environment.imagesUrl;

  @Input() projects:any;

  constructor() { }

  ngOnInit(): void {
  }

}
