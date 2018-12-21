import { inject, TestBed } from '@angular/core/testing';

import { MockRegressionAppService } from '../regression-app/mock.regression-app.service';
import { RegressionAppService } from '../regression-app/regression-app.service';
import { StateShareService } from './state-share.service';

describe('StateShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: RegressionAppService, useClass: MockRegressionAppService }
    ]
  }));

  it('should be created', () => {
    const service: StateShareService = TestBed.get(StateShareService);
    expect(service).toBeTruthy();
  });

  it('will emit the current environment when subscribed', inject([StateShareService], (service: StateShareService) => {
    const envValue = 'test2';

    service.setTargetEnvironment(envValue);

    service.targetedEnvironment$.subscribe(x => expect(x).toEqual(envValue));
  }));

  it('will emit null as a default', inject([StateShareService], (service: StateShareService) => {
    service.targetedEnvironment$.subscribe(x => expect(x).toBeNull());
  }));

  it('will poll a set of results', inject([StateShareService], (service: StateShareService) => {
    service.pollResults();

    service.lastResults$.subscribe(x => {
      expect(x).not.toBeNull();
      expect(x.length).toBeGreaterThan(0);
    });
  }));
});
