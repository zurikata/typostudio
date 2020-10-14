import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;

  addBackground:boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);

  }

  scrollEvent = (event): void => {
    const scrollTopVal = event.target.scrollingElement.scrollTop;
    if(scrollTopVal>200) {
      this.addBackground = true;
    }
    else{
      this.addBackground = false;
    }
    
  }

}
