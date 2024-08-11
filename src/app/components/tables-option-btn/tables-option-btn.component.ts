import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCab, faDeleteLeft, faEdit, faFile } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tables-option-btn',
  standalone: true,
  imports: [NgbDropdownModule, FontAwesomeModule],
  templateUrl: './tables-option-btn.component.html',
  styleUrl: './tables-option-btn.component.css'
})
export class TablesOptionBtnComponent {

  @Input() options: string[] = [];
  @Output() action = new EventEmitter<string>();

  // icons imports
  faEdi = faEdit;
  faDel = faDeleteLeft;
  faDet = faFile;

  sendAction (a:string) {
    this.action.emit(a);
  }

  getIcon (item : string ) {
    switch(item) {
      case 'edit': 
        return faEdit;
      default:
        return faDeleteLeft
    }
  }

}
