import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { environment } from '../../environments/environment';
import { RegressionAppService } from './regression-app/regression-app.service';
import { MockRegressionAppService } from './regression-app/mock.regression-app.service';
import { StateShareService } from './state-share/state-share.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: RegressionAppService, useClass: environment.fakeDataServices ? MockRegressionAppService : RegressionAppService },
    StateShareService,
  ]
})
export class AppServicesModule { }
