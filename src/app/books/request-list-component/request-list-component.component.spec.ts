import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListComponentComponent } from './request-list-component.component';

describe('RequestListComponentComponent', () => {
  let component: RequestListComponentComponent;
  let fixture: ComponentFixture<RequestListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
