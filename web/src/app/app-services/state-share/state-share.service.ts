import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { RegressionAppService } from '../regression-app/regression-app.service';
import { RegressionResultInterface } from '../regression-app/models/regression-result.interface';

@Injectable({
  providedIn: 'root'
})
export class StateShareService {

  public targetedEnvironment$: BehaviorSubject<string>;
  public lastResults$: BehaviorSubject<Array<RegressionResultInterface>>;

  constructor(
    private _regressionService: RegressionAppService
  ) {
    this.targetedEnvironment$ = new BehaviorSubject(null);
    this.lastResults$ = new BehaviorSubject(null);
  }

  /**
   * Sets the target environment.
   * @param environment - Name of the environment you want to target.
   */
  setTargetEnvironment(environment: string) {
    this.targetedEnvironment$.next(environment);
  }

  /**
   * Polls the most recent results. Normally we'd store that in a view or some such, but this allows us to toggle between views
   *   without having to pass a bunch of lists around.
   */
  pollResults() {
    this._regressionService.regressionResults('test', 'test')
      .pipe(take(1))
      .subscribe(x => this.lastResults$.next(x));
  }
}
