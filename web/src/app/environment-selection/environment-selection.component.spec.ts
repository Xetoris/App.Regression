import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatGridListModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnvironmentSelectionComponent } from './environment-selection.component';
import { Router } from '@angular/router';

describe('EnvironmentSelectionComponent', () => {
  let component: EnvironmentSelectionComponent;
  let fixture: ComponentFixture<EnvironmentSelectionComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      declarations: [ EnvironmentSelectionComponent ],
      imports: [
        MatGridListModule,
        MatCardModule,
        MatOptionModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
