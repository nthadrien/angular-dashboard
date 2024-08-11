import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tables-btn',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './tables-btn.component.html',
  styleUrl: './tables-btn.component.css',
})
export class TablesBtnComponent {
  @Output() optnClick = new EventEmitter();

  clickedOption(a: MouseEvent ) {
    this.optnClick.emit(a);
  }
}
