import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { RegressionAppService } from './regression-app.service';
import { MockRegressionAppResponses} from './mock.regression-app.responses';

describe('RegressionAppService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegressionAppService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', inject([RegressionAppService], (service: RegressionAppService) => {
    expect(service).toBeTruthy();
  }));

  it('can retrieve its base url', inject([RegressionAppService], (service: RegressionAppService) => {
    const buildName = 'Regressions.Go.Recruit.Core.Admin';
    const buildId = '19';

    service.regressionResults(buildName, buildId)
      .subscribe(() => 'Pass', fail);

    const req = httpTestingController.match(
      `${regressionAppServiceBaseUrl()}/search?BuildName=${buildName}&BuildId=${buildId}`
    );

    req.forEach(x => x.flush(MockRegressionAppResponses.regressionResults));
  }));

  it('returns a set of regression results', inject([RegressionAppService], (service: RegressionAppService) => {
    const buildName = 'Regressions.Go.Recruit.Core.Admin';
    const buildId = '19';

    service.regressionResults(buildName, buildId)
      .subscribe(resp => {
        resp.forEach(record => {
          expect(record.auditId).toEqual(jasmine.any(String));
          expect(record.buildId).toEqual(jasmine.any(String));
          expect(record.buildName).toEqual(jasmine.any(String));
          expect(record.buildUrl).toEqual(jasmine.any(String));
          expect(record.date).toEqual(jasmine.any(Date));
          expect(record.duration).toEqual(jasmine.any(Number));
          expect(record.environment).toEqual(jasmine.any(String));
          // expect(record.exceptionLine).toEqual(jasmine.any(String));
          // expect(record.exceptionMessage).toEqual(jasmine.any(String));
          // expect(record.exceptionSource).toEqual(jasmine.any(String));
          expect(record.group).toEqual(jasmine.any(String));
          expect(record.id).toEqual(jasmine.any(String));
          expect(record.index).toEqual(jasmine.any(String));
          expect(record.machine).toEqual(jasmine.any(String));
          // expect(record.score).toEqual(jasmine.any(Number));
          expect(record.status).toEqual(jasmine.any(String));
          expect(record.tags).toEqual(jasmine.any(Array));
          expect(record.test).toEqual(jasmine.any(String));
          expect(record.type).toEqual(jasmine.any(String));
          // expect(record.watchUrl).toEqual(jasmine.any(String));
        });
      }, fail);

    const req = httpTestingController.match(
      `${regressionAppServiceBaseUrl()}/search?BuildName=${buildName}&BuildId=${buildId}`
    );

    req.forEach(x => x.flush(MockRegressionAppResponses.regressionResults));
  }));
});

function regressionAppServiceBaseUrl() {
  const templateString: string = environment.regressionAppTemplate;

  return `${templateString}/api`;
}
