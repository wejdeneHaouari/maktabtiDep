import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaptersStoryComponent } from './list-chapters-story.component';

describe('ListChaptersStoryComponent', () => {
  let component: ListChaptersStoryComponent;
  let fixture: ComponentFixture<ListChaptersStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChaptersStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChaptersStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
