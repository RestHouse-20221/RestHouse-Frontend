import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelersDashboardComponent } from './travelers-dashboard.component';

describe('TravelersDashboardComponent', () => {
  let component: TravelersDashboardComponent;
  let fixture: ComponentFixture<TravelersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
