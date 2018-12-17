import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { RegressionAppInterface } from './regression-app.interface';
import { RegressionResultInterface } from './models/regression-result.interface';


@Injectable({
  providedIn: 'root'
})
export class RegressionAppService implements RegressionAppInterface {
  /**
   * Retrieves the base url for use by the helper.
   */
  private static baseUrl(): string {
    const templateString: string = environment.regressionAppTemplate;

    return `${templateString}/api`;
  }

  // endregion
  constructor(private http: HttpClient) {
  }

  /**
   * Retrieves a list of regression results for a given Build
   * @param buildName - Name of the build project
   * @param buildId - Identifier for the unique build to target
   */
  regressionResults(buildName: string, buildId: string): Observable<RegressionResultInterface[]> {
    return this.http.get(`${RegressionAppService.baseUrl()}/search?BuildName=${buildName}&BuildId=${buildId}`)
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
