import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBtnComponent } from './tables-btn.component';

describe('TablesBtnComponent', () => {
  let component: TablesBtnComponent;
  let fixture: ComponentFixture<TablesBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
