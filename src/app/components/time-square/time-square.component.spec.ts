import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSquareComponent } from './time-square.component';

describe('TimeSquareComponent', () => {
  let component: TimeSquareComponent;
  let fixture: ComponentFixture<TimeSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
