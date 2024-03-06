import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListennerComponent } from './event-listenner.component';

describe('EventListennerComponent', () => {
  let component: EventListennerComponent;
  let fixture: ComponentFixture<EventListennerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventListennerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventListennerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
