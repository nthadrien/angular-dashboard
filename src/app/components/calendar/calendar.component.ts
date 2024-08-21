import { Component, computed, signal, Signal, ViewChildren, ElementRef, afterRender } from '@angular/core';

interface His {
  startDay : string;
  endDay : string;
  description : string;
  place: string;
}

interface ScheduleDto {start:number; endIn:number}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports:[
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {


  constructor(
    cellsRef : ElementRef 
  ) {
    afterRender (()=>{
      const cells = cellsRef.nativeElement.querySelectorAll(".calendar-cell");
      this.thisMonth().schedule.forEach( (itm : ScheduleDto ) => {
        cells[itm.start].style.backgound = 'blue';
      });
    })
   }

  
  meetings: His[] = [
    {
      startDay : "8/19/2024",
      endDay : "8/20/2024",
      description : "Petite Analyses des choses bizzares",
      place: "Mendong Fee"
    },
    {
      startDay : "8/21/2024",
      endDay : "8/22/2024",
      description : "Reunion du staff techniques",
      place: "Douala Bonasama centre francais"
    },
    {
      startDay : "9/21/2024",
      endDay : "9/22/2024",
      description : "Reunion du staff techniques",
      place: "Mendong centre Climatique"
    },
    {
      startDay : "02/02/2024",
      endDay : "8/2/2024",
      description : "Reunion du staff techniques",
      place: "Ngousso hopital catholique"
    },
    {
      startDay : "2/2/2023",
      endDay : "8/2/2023",
      description : "Reunion du staff techniques",
      place: "Tsinga Route Deriere"
    },
    {
      startDay : "4/2/2024",
      endDay : "9/2/2023",
      description : "Reunion du staff techniques",
      place: "Biamaci Route Deriere"
    },
    {
      startDay : "12/8/2022",
      endDay : "13/8/2022",
      description : "Reunion du staff techniques",
      place: "lac du centre Climatique"
    }
  ];

  normalDays:string[] = ["dim","lun","mar","mer","jeu","ven","sam"]; //["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
  normalMonths:string[] = [
    "janvier","février","mars", "avril", "mai", "juin", "juillet", "août","septembre", "octobre", "novembre", "décembre"
  ];
  
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
    return Array.from({ length: 35 }, ( x , index) =>index < this.firstDay() ? 0
      // previousMonth - this.firstDay() + index + 1 
      : currentMonth + this.firstDay() > index ? (index  - this.firstDay() ) % currentMonth + 1
      : 0
    // index < this.firstDay() ? null :
    // index  > currentMonth + this.firstDay() ? null :
    // (index  - this.firstDay() ) % currentMonth + 1
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
    this.today.set(
      new Date(this.currentYear(), this.currentMonth(), $event )
    );
  }

  thisMonth: Signal<any> = computed( () => {

    let schedule: ScheduleDto[] = [];
    let monthEvents = this.meetings.filter( meet => this.filterMonthlyEvents(meet) );

    for( let x of monthEvents) {
      const s = new Date(x.startDay).getTime();
      const e = new Date(x.endDay).getTime();
      const diff:number =  Math.ceil( Math.abs( e - s) / (1000 * 60 * 60 * 24));
      schedule.push({
        start: new Date(x.startDay).getDate() , 
        endIn : diff
      })
    }

    let weekEvents = monthEvents.filter( meet => this.filterWeeklyEvents( new Date(meet.startDay).getDate() ) || new Date(meet.endDay).getDate() );
    let dayEvents = weekEvents.filter( meet => this.filterDailyEvent( new Date(meet.startDay).getDate()  ) || this.filterDailyEvent( new Date(meet.endDay).getDate()  ));

    return { schedule, monthEvents , dayEvents , weekEvents };
  });

  //  Time filtering functions :
  filterMonthlyEvents ( chec : His ) {
    const start = new Date(chec.startDay);
    const end = new Date(chec.endDay);
    if ( start.getTime() <= this.today().getTime() &&  this.today().getTime() <= end.getTime() ) {
      return true
    }
    return ( start.getMonth() === this.today().getMonth() && start.getFullYear() ===  this.today().getFullYear() ) || 
    ( end.getMonth() === this.today().getMonth() && end.getFullYear() ===  this.today().getFullYear());
  }

  filterWeeklyEvents ( day : number ) {
    let difference = Math.abs( day - this.today().getDate() )
    const sameWeek = difference > 7 ? false : true;
    if ( sameWeek ) {
      return true ;
    }
    return false;
  }

  filterDailyEvent ( day : number ) {
    return Math.abs( day - this.today().getDate() ) < 1 ;
  }

  checkDailyEvents (  ) {
    const b = '';
  }

}