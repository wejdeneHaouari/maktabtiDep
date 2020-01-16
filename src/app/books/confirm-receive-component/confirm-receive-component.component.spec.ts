import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReceiveComponentComponent } from './confirm-receive-component.component';

describe('ConfirmReceiveComponentComponent', () => {
  let component: ConfirmReceiveComponentComponent;
  let fixture: ComponentFixture<ConfirmReceiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmReceiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReceiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
