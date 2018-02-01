import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelWidgetComponent } from './level-widget.component';

describe('LevelWidgetComponent', () => {
  let component: LevelWidgetComponent;
  let fixture: ComponentFixture<LevelWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
