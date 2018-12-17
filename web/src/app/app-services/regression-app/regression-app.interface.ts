import {Observable} from 'rxjs';

import {RegressionResultInterface} from './models/regression-result.interface';

/**
 * Defines shape for a service provider for the RegressionApp Api
 */
export interface RegressionAppInterface {
  /**
   * Retrieves a list of regression results for a given Build
   * @param buildName - Name of the build project
   * @param buildId - Identifier for the unique build to target
   */
  regressionResults(buildName: string, buildId: string): Observable<RegressionResultInterface[]>;
}
