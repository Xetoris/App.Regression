import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsDashboardRoutingModule } from './results-dashboard-routing.module';
import { ResultDetailModalComponent } from './result-detail-modal/result-detail-modal.component';
import { TickDisplayComponent } from './tick-display/tick-display.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ResultDetailModalComponent,
    TickDisplayComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ResultsDashboardRoutingModule
  ]
})
export class ResultsDashboardModule { }
