import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTimeButtonComponent } from './start-time-button.component';

describe('StartTimeButtonComponent', () => {
  let component: StartTimeButtonComponent;
  let fixture: ComponentFixture<StartTimeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTimeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
