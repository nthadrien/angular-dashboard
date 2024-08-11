import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ThemeSwitcherComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
