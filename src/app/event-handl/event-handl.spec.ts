import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandl } from './event-handl';

describe('EventHandl', () => {
  let component: EventHandl;
  let fixture: ComponentFixture<EventHandl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
