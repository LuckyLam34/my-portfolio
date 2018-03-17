import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollnextWidgetComponent } from './scrollnext-widget.component';

describe('ScrollnextWidgetComponent', () => {
  let component: ScrollnextWidgetComponent;
  let fixture: ComponentFixture<ScrollnextWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollnextWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollnextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
