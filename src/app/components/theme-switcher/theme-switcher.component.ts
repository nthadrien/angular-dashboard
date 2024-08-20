import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent implements OnInit {

  
  doc = (document?.querySelector('body') as HTMLBodyElement);
  isTheme:string = 'dark';

  // icons
  faDay = faSun;
  faNit = faMoon;


  toggleTheme() {
    if( this.doc ) {
      if ( this.isTheme === "dark" ) this.isTheme = "light";
      else this.isTheme = "dark";
      this.doc.setAttribute('data-bs-theme', this.isTheme);
    }
  }

  initTheme () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) this.isTheme = 'dark';
    else this.isTheme = "light";
  }

  toggleIcon () {
    return this.isTheme !== 'dark'? this.faDay : this.faNit
  }

  ngOnInit():void {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? this.isTheme = 'light': this.isTheme = 'dark';
    this.initTheme();
  }
}
