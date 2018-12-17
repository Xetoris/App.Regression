import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { faDotCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { StateShareService } from '../app-services/state-share/state-share.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit, OnDestroy {

  targetEnvironment: string;
  retargetIcon: IconDefinition;
  private sub$: Subscription;

  constructor(
    private router: Router,
    private stateShare: StateShareService,
  ) { }

  ngOnInit() {
    this.sub$ = this.stateShare.targetedEnvironment$.subscribe(x => {
      this.targetEnvironment = x;
    });

    this.retargetIcon = faDotCircle;
  }

  ngOnDestroy() {
    if (this.sub$ && !this.sub$.closed) {
      this.sub$.unsubscribe();
    }
  }

  resetTarget() {
    console.log('Reset Target Called!');
    this.router.navigate(['environments']);
  }
}
