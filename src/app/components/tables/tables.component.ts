import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TablesOptionBtnComponent } from "../tables-option-btn/tables-option-btn.component";


interface ActionInterface {
  action: string;
  row: any;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    FormsModule,
    FontAwesomeModule,
    TablesOptionBtnComponent
],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent implements OnChanges {
  @Input({ required: true }) caption: string = 'inconnue';
  @Input() list:any[] = [];
  @Input({ required: true  }) headings: string[] = [];
  @Input() options:string[] = ['details','edit','delete'];
  @Output() actionTriggered = new EventEmitter<ActionInterface>();
  pageSize: number = 5;
  currentPage = 1;
  listSize = 1;
  sortOrder: boolean = true;
  sortWhat: string = '';
  private currentList:any[] = this.list;

  //   Icons
  faArwUp = faChevronUp;
  faArwDown = faChevronDown;
  faSch = faSearch;

  ngOnChanges () {
    this.listSize = this.list.length;
    this.currentList = this.list;
    this.visibleData();
    console.warn(this.listSize)
  }

  visibleData (): any {
    let start = (this.currentPage - 1 )*this.pageSize;
    let end  = start + this.pageSize;
    return this.currentList.slice(start, end);
  }

  sortEnteries(what: string) {
    this.sortOrder = !this.sortOrder;
    this.sortWhat = what;
    const typ = typeof this.currentList[0][what];
    if (typ === 'string') {
      if (this.sortOrder) this.currentList.sort((a: any, b: any) => this.stringSort(a[what], b[what]));
      else this.currentList.sort((a: any, b: any) => this.stringSort(b[what], a[what]));
    } else if (typ === 'number') {
      if (this.sortOrder) this.currentList.sort((a: any, b: any) => this.numberSort(a[what], b[what]));
      else this.currentList.sort((a: any, b: any) => this.numberSort(b[what], a[what]));
    }
    this.visibleData();
  }

  numberOfPages () {
    const length:number = Math.ceil(this.listSize / this.pageSize)
    return  Array.from({length}, (x, i) => i+1);
  }

  // filtering rows
  filterList( e: Event ):void {
    const text = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    this.currentList = this.list.filter( (row:any) => Object.values(row).some(
        (cell) => cell?.toString().toLowerCase().includes( text )
    ));
    this.listSize = this.currentList.length;
    this.visibleData();
  }

  // sorting fields

  stringSort(a: string, b: string) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  }

  numberSort(a: number, b: number) {
    return a - b;
  }

  // change pages
  nextPage () {
    const length:number = Math.ceil(this.listSize / this.pageSize)
    let result = this.currentPage + 1;
    this.currentPage = result > length ? this.currentPage : result;
    this.visibleData();
  }

  prevPage() {
    let result = this.currentPage - 1;
    this.currentPage = result <= 0 ? this.currentPage : result ;
    this.visibleData();
  }

  pageChange( a: number ) {
    this.currentPage = a;
    this.visibleData();
  }

  itemsSeen () {
    const totalVue =  this.currentPage *this.pageSize ;
    return  totalVue < this.listSize ? totalVue : totalVue - (totalVue - this.listSize);
  }

  // table actions
  action (action:string, row:any) {
    this.actionTriggered.emit({ action, row });
  }

  getPDF() {
    console.log('pdf copy of current');
  }

  getCSV () {
    console.log('CSV copy of current list.');
  }
}
