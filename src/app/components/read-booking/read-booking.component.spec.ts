import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBookingComponent } from './read-booking.component';

describe('ReadBookingComponent', () => {
  let component: ReadBookingComponent;
  let fixture: ComponentFixture<ReadBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
