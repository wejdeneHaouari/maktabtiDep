import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WriteChapterComponent} from './write-chapter.component';

describe('WriteChapterComponent', () => {
  let component: WriteChapterComponent;
  let fixture: ComponentFixture<WriteChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WriteChapterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
