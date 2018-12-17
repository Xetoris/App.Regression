import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDetailModalComponent } from './result-detail-modal.component';

describe('ResultDetailModalComponent', () => {
  let component: ResultDetailModalComponent;
  let fixture: ComponentFixture<ResultDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
