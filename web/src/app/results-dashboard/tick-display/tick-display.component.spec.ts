import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickDisplayComponent } from './tick-display.component';

describe('TickDisplayComponent', () => {
  let component: TickDisplayComponent;
  let fixture: ComponentFixture<TickDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
