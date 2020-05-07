import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeOfDayComponent } from './programme-of-day.component';

describe('ProgrammeOfDayComponent', () => {
  let component: ProgrammeOfDayComponent;
  let fixture: ComponentFixture<ProgrammeOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
