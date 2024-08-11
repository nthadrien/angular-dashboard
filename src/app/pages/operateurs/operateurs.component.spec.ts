import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateursComponent } from './operateurs.component';

describe('OperateursComponent', () => {
  let component: OperateursComponent;
  let fixture: ComponentFixture<OperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperateursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
