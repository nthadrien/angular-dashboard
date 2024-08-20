import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';

interface His {
  startDay : string;
  endDay : string;
  description : string;
  place: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports:[
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {

  
  meetings: His[] = [
    {
      startDay : "8/19/2024",
      endDay : "8/20/2024",
      description : "Petite Analyses des choses bizzares",
      place: "Mendong centre Climatique"
    },
    {
      startDay : "8/21/2024",
      endDay : "8/22/2024",
      description : "Reunion du staff techniques",
      place: "Mendong centre Climatique"
    },
    {
      startDay : "9/21/2024",
      endDay : "9/22/2024",
      description : "Reunion du staff techniques",
      place: "Mendong centre Climatique"
    },
    {
      startDay : "2/2/2024",
      endDay : "8/2/2024",
      description : "Reunion du staff techniques",
      place: "Mendong centre Climatique"
    },
    {
      startDay : "2/2/2023",
      endDay : "8/2/2023",
      description : "Reunion du staff techniques",
      place: "Mendong centre Climatique"
    },
    {
      startDay : "12/8/2022",
      endDay : "13/8/2022",
      description : "Reunion du staff techniques",
      place: "Mendong centre Climatique"
    }
  ]

  normalDays:string[] = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
  normalMonths:string[] = [
    "janvier","février","mars", "avril", "mai", "juin", "juillet", "août",
    "septembre", "octobre", "novembre", "décembre"
  ];


  calendarViewMode = "month";

  
  today = signal(new Date());
  currentYear = computed( () =>  this.today().getFullYear() );
  currentMonth: Signal<number> = computed(()=>{
    return this.today().getMonth();
  });

  firstDay = computed(() => {
    const b = new Date( this.today().getFullYear() , this.today().getMonth() , 1);
    return b.getDay();
  })
  
  daysInMonth = computed( () => {
    let currentMonth = new Date(this.currentYear(), this.currentMonth()+1, 0 ).getDate();
    let previousMonth = new Date(this.currentYear(), this.currentMonth(), 0 ).getDate();
    return Array.from({ length: 35 }, ( x , index) => 
      index < this.firstDay() ? previousMonth - this.firstDay() + index + 1 
      : (index  - this.firstDay() ) % currentMonth + 1
  )});

  prevMonth () {
    let month = this.today().getMonth() - 1;
    let year = this.today().getFullYear();
    let day = this.today().getDay();
    if( month < 0 ) {
      month = 11; year--;
    };
    this.today.set(new Date(year,month, day ));
  }

  nextMonth () {
    let month = (this.today().getMonth() + 1);
    let year = this.today().getFullYear();
    let day = this.today().getDay();
    if( month > 11 ) {
      month = 0; year++ ;
    };
    this.today.set(new Date(year,month, day ));
  }

  changeDay ($event: number ) {

    // this.today.set(
    //   new Date(this.currentYear(), this.currentMonth(), $event )
    // );
  }
  
  switchToViewMode( $event : "day"| "month"  ) {
    this.calendarViewMode = $event;
  } 

  todayEvents () {  }

  thisWeekEvents () {
    let week:His[] = this.meetings.filter( 
      evento => this.fiterEvents(evento.startDay) || this.fiterEvents(evento.endDay)
    );
    return week;
  }

  fiterEvents ( chec : Date | string ) {

    const inputDate = new Date(chec);

    let arr = this.daysInMonth().length ;
    let difference = Math.abs(inputDate.getTime() - this.today().getTime() )
    const sameWeek = difference > 604800000 ? false : true;

    if ( sameWeek ) {
      let dd = new Date(difference).getDate();
      return dd >= 1 && dd <= 8 ? true: false ;
    }
    return false;
  }


}