import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})
export class HomePortfolioComponent implements OnInit {

  projects = [
    {
      id:1,
      slug:"petrogas",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"PETROGAS //  2015",
      imageURL:"petrogas-img.png",
      gridColumn:"1/3",
      gridRow:"1"
    },
    {
      id:2,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"gelateria-img.png",
      gridColumn:"1",
      gridRow:"2/4"
    },
    {
      id:3,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"cara-img.png",
      gridColumn:"2",
      gridRow:"2"
    },
    {
      id:4,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"beyond-img.png",
      gridColumn:"2",
      gridRow:"3"
    },
    {
      id:5,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"magma-img.png",
      gridColumn:"1/3",
      gridRow:"4"
    },
    {
      id:6,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"kpe-img.png",
      gridColumn:"1",
      gridRow:"5"
    },
    {
      id:7,
      slug:"comware",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"COMWARE //  2017",
      imageURL:"comware-img.png",
      gridColumn:"1",
      gridRow:"6"
    },
    {
      id:8,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"cuanto-img.png",
      gridColumn:"2",
      gridRow:"5/7"
    },
    {
      id:9,
      slug:"gelateria-italiana",
      title:"IDENTIDAD DE MARCA // REHABILITACIÓN DE MARCA",
      client:"GELATERIA ITALIANA //  2015",
      imageURL:"riesgos-img.png",
      gridColumn:"1/3",
      gridRow:"7"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
