import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRequestComponentComponent } from './send-request-component.component';

describe('SendRequestComponentComponent', () => {
  let component: SendRequestComponentComponent;
  let fixture: ComponentFixture<SendRequestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRequestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
