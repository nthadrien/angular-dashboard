import { Component, inject, OnDestroy  } from '@angular/core';
import { NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastInterface, ToastService } from './toaster.service';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { faEraser, faLink, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [NgClass, NgbToastModule, NgTemplateOutlet, NgbTooltipModule, FontAwesomeModule ],
  templateUrl: './toaster.component.html',
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {

  toastService = inject(ToastService);
  faError = faWarning;
  faSuccess = faLink;
  faInfo = faEraser ;
  

  closeToast( e: any) {
    console.log(e);
  }

  correctIcon (te:string) {
    return te === "info" ? this.faSuccess 
    : te === "success" ? this.faInfo : faEraser
  }
}
