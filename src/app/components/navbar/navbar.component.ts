import { Component, output  } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule, ThemeSwitcherComponent, FontAwesomeModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  faLogout = faDoorOpen;
  
  toggleSidebar = output();
  collapsed = true;

  setToggle() {
    this.toggleSidebar.emit();
  }

}