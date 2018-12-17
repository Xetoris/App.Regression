import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {RegressionAppInterface} from './regression-app.interface';
import {MockRegressionAppResponses} from './mock.regression-app.responses';
import {RegressionResultInterface} from './models/regression-result.interface';


@Injectable({
  providedIn: 'root'
})
export class MockRegressionAppService implements RegressionAppInterface {
  /**
   * Retrieves a list of regression results for a given Build
   * @param buildName - Name of the build project
   * @param buildId - Identifier for the unique build to target
   */
  regressionResults(buildName: string, buildId: string): Observable<RegressionResultInterface[]> {
    return of(MockRegressionAppResponses.regressionResults)
      .pipe(
        map(resp => {
          return resp['records'].map(record => {
            const mapped = {
              auditId: record['auditId'],
              buildId: record['buildId'],
              buildName: record['buildName'],
              buildUrl: record['buildUrl'],
              date: new Date(record['date']),
              duration: record['duration'],
              environment: record['environment'],
              exceptionLine: record['exceptionLine'],
              exceptionMessage: record['exceptionMessage'],
              exceptionSource: record['exceptionSource'],
              group: record['group'],
              id: record['id'],
              index: record['index'],
              machine: record['machine'],
              medium: record['medium'],
              score: record['score'],
              status: record['status'],
              tags: record['tags'],
              test: record['test'],
              type: record['type'],
              watchUrl: record['watchUrl']
            };

            return mapped as RegressionResultInterface;
          });
        })
      );
  }
}
