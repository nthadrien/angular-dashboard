import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesOptionBtnComponent } from './tables-option-btn.component';

describe('TablesOptionBtnComponent', () => {
  let component: TablesOptionBtnComponent;
  let fixture: ComponentFixture<TablesOptionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesOptionBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesOptionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
