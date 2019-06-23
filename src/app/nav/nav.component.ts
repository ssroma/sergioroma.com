import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  animations: [
    trigger('links', [
      state('closed', style({
        left: '999px'
      })),
      state('openned', style({
        left: '0px'
      })),
      transition('closed <=> openned', animate(1000))
    ])
  ]
})
export class NavComponent implements OnInit {

  showHideNav = 'closed';

  constructor() { }

  ngOnInit() {
    
   }

  onOpen(links: HTMLElement){
    console.log('From close button.' + links)
    this.showHideNav == 'closed' ? this.showHideNav = 'openned' : this.showHideNav = 'closed'
    //links.style.left = '0px'
  }

  onClose(links: HTMLElement){
    console.log('From close button.' + links)
    this.showHideNav == 'openned' ? this.showHideNav = 'closed' : this.showHideNav = 'openned'
    //links.style.left = '900px'
  }

  closeNav(){
    if(this.showHideNav == 'openned'){
      this.showHideNav == 'openned' ? this.showHideNav = 'closed' : this.showHideNav = 'openned'
    }
  }
}
