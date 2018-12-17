import { inject, TestBed } from '@angular/core/testing';

import { StateShareService } from './state-share.service';

describe('StateShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

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
});
