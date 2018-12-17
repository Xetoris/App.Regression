import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from '../../environments/environment';
import { StateShareService } from '../app-services/state-share/state-share.service';

@Component({
  selector: 'app-environment-selection',
  templateUrl: './environment-selection.component.html',
  styleUrls: ['./environment-selection.component.scss']
})
export class EnvironmentSelectionComponent implements OnInit {
  eventSelectForm: FormGroup;
  environments: string[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private stateShare: StateShareService
    ) { }

  ngOnInit() {
    this.environments = environment.supportedEnvironments.map(x => x.toUpperCase());
    this.createForm();
    this.stateShare.setTargetEnvironment(null);
  }

  createForm() {
    this.eventSelectForm = this.fb.group({
      environment: [this.environments[0], Validators.required]
    });
  }

  selectEnvironment(selected: string) {
    this.router.navigate(['environments', selected, 'dashboard']);
  }
}
