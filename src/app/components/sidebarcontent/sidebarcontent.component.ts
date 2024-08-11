import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCube, faUsers, faScrewdriverWrench , faBook, faCalendarDay,
  faAngleDown,
  faUser,
  faNewspaper,
  faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebarcontent',
  standalone: true,
  imports: [NgClass, FontAwesomeModule , RouterLink, RouterLinkActive],
  templateUrl: './sidebarcontent.component.html',
  styleUrl: './sidebarcontent.component.css'
})
export class SidebarcontentComponent {

  content:string = '';

  faEdit = faNewspaper;
  faArrw = faAngleDown;
  faHome = faCube;
  faUsers = faUsers;
  faUser = faUser;
  faSetting = faScrewdriverWrench;
  faBook =  faBook;
  faEvents = faCalendarDay;
  faOp = faPowerOff;


  showSubLinks ( text : string ) {
    if ( this.content === text ) this.content = '';
    else this.content = text || '';
  }

}
