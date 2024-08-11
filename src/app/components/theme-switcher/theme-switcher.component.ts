import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {

  
  doc = (document?.querySelector('body') as HTMLBodyElement);
  isTheme = 'dark';

  toggleTheme() {
    if( this.doc ) {
      if ( this.isTheme === "dark" ) this.isTheme = "light";
      else this.isTheme = "dark";
      this.doc.setAttribute('data-bs-theme', this.isTheme);
    }
  }

  ngOnInit():void {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? this.isTheme = 'light': this.isTheme = 'dark';
    this.toggleTheme()
  }
}
