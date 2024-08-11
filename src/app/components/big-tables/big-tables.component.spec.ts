import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTablesComponent } from './big-tables.component';

describe('BigTablesComponent', () => {
  let component: BigTablesComponent;
  let fixture: ComponentFixture<BigTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
