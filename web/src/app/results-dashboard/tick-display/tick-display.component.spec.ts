import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TickDisplayComponent } from './tick-display.component';

describe('TickDisplayComponent', () => {
  let component: TickDisplayComponent;
  let fixture: ComponentFixture<TickDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickDisplayComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatSelectModule
      ]
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
