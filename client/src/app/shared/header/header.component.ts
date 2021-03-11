import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() services;

  isMenuCollapsed = true;

  addBackground:boolean = false;

  nosotros_menu = [
    {name: 'Equipo', link: '/equipo', fragment:'header'},
    {name: 'Clientes', link: '/clientes', fragment:'header'},
    {name: 'Red de Colaboración', link: '/red-colaboracion', fragment:'header'},

  ]

  menu_items = [
    {title: 'PROYECTOS', link: '/', fragment:'portfolio-section'},
    {title: 'CONTACTOS', link: '/', fragment:'contact-section'},
  ];


  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);

  }

  scrollEvent = (event): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if(scrollTopVal>200 || this.isMenuCollapsed == false) {
      this.addBackground = true;
    }
    else{
      this.addBackground = false;
    }
    
  }

  toggleMenu(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if(!this.isMenuCollapsed){
      this.addBackground = true;
    }
  }

}
