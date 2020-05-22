import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicacesComponent } from './dedicaces.component';

describe('DedicacesComponent', () => {
  let component: DedicacesComponent;
  let fixture: ComponentFixture<DedicacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
