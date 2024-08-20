import { AfterViewInit, Component, OnInit, TemplateRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToastService } from './components/toaster/toaster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ToasterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {

  toastService =  inject(ToastService)

  constructor (
    // private toastService : ToastService
  ) {}

  ngAfterViewInit() {}

}
