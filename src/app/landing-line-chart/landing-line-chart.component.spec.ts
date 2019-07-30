import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLineChartComponent } from './landing-line-chart.component';

describe('LandingLineChartComponent', () => {
  let component: LandingLineChartComponent;
  let fixture: ComponentFixture<LandingLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
