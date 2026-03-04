import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCard } from './evento-card';

describe('EventoCard', () => {
  let component: EventoCard;
  let fixture: ComponentFixture<EventoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
