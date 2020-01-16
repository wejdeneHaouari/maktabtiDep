import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReceiveComponent } from './confirm-receive.component';

describe('ConfirmReceiveComponent', () => {
  let component: ConfirmReceiveComponent;
  let fixture: ComponentFixture<ConfirmReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
