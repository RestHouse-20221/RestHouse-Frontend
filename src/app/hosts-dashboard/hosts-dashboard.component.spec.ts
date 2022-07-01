import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsDashboardComponent } from './hosts-dashboard.component';

describe('HostsDashboardComponent', () => {
  let component: HostsDashboardComponent;
  let fixture: ComponentFixture<HostsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
