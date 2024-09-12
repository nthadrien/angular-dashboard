import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { SmallTablesComponent } from "../../components/small-tables/small-tables.component";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CalendarComponent, SmallTablesComponent, FormsModule, FontAwesomeModule ],
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css'
})
export class EvenementsComponent {

  faWarn = faWarning;

  now = new Date();
  addEvent = false;
  error = "";


  toggleAddEvent() {
    this.addEvent = !this.addEvent; 
    console.warn(this.addEvent);
  }
}
