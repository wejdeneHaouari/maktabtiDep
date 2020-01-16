import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExchangeBookComponent } from './card-exchange-book.component';

describe('CardExchangeBookComponent', () => {
  let component: CardExchangeBookComponent;
  let fixture: ComponentFixture<CardExchangeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExchangeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExchangeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
