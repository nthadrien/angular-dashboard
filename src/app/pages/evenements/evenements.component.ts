import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { SmallTablesComponent } from "../../components/small-tables/small-tables.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CalendarComponent, SmallTablesComponent, FormsModule],
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css'
})
export class EvenementsComponent {

  voirPlus:boolean = false;


  toggleVoirPlus  () {
    this.voirPlus = !this.voirPlus;
  }
}
