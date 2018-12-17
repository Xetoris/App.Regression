import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateShareService {

  public targetedEnvironment$: BehaviorSubject<string>;

  constructor() {
    this.targetedEnvironment$ = new BehaviorSubject(null);
  }

  /**
   * Sets the target environment.
   * @param environment - Name of the environment you want to target.
   */
  setTargetEnvironment(environment: string) {
    this.targetedEnvironment$.next(environment);
  }
}
