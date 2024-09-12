import { Component, output  } from '@angular/core';
import { NgbDropdownModule, NgbTooltip, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faIdBadge, faPersonRunning, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule, ThemeSwitcherComponent, FontAwesomeModule, NgbTooltipModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  faProfil = faIdBadge;
  faLogout = faPersonRunning;
  faSearch = faSearch ;
  faNotify = faBell;
  
  toggleSidebar = output();
  collapsed = true;

  setToggle() {
    this.toggleSidebar.emit();
  }

}