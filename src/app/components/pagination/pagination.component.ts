import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() listSize: number = 0;
  @Input() currentPage = 1;
  @Input() pageSize: number = 5;
  @Output() pageChange = new EventEmitter<number>();

  numberOfPages(): number[] {
    const length = Math.ceil( this.listSize / this.pageSize); // Desired length of the array
    const array = Array.from({ length }, (_, index) => index+1);
    return array;
  }

  ngOnChanges() {
    this.numberOfPages();
  }

  endPage() {
    this.pageChange.emit(this.currentPage+1);
  }
  startPage() {
    this.pageChange.emit(1);
  }
  nextPage() {
    const nxt: number = this.currentPage + 1;
    this.pageChange.emit(
      nxt >= this.numberOfPages.length ? this.numberOfPages.length : nxt
    );
  }
  prevPage() {
    const prev = this.currentPage - 1;
    this.pageChange.emit(prev > 0 ? prev : 1);
  }

  pageNumber(a: number) {
    this.pageChange.emit(a++);
  }
}
