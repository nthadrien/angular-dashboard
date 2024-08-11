import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcontentComponent } from './sidebarcontent.component';

describe('SidebarcontentComponent', () => {
  let component: SidebarcontentComponent;
  let fixture: ComponentFixture<SidebarcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
