import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftEditComponent } from './aircraft-edit.component';

describe('AircraftEditComponent', () => {
  let component: AircraftEditComponent;
  let fixture: ComponentFixture<AircraftEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
