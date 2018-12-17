import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StateShareService } from '../../app-services/state-share/state-share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  resultSet: Array<any>;

  constructor(
    private _route: ActivatedRoute,
    private stateShare: StateShareService
  ) { }

  ngOnInit() {
    // Important note: This only checks the url parameter once. If you add some way to change the environment on this control,
    // you will need to subscribe to the event change instead.
    this.stateShare.setTargetEnvironment(this._route.snapshot.paramMap.get('environment'));

    this.resultSet = [
      { status: 'passed '},
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'passed '},
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'passed '},
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'passed '},
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'passed '},
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' },
      { status: 'passed' },
      { status: 'failed' }
    ];
  }
}
