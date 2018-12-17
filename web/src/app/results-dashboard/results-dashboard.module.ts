import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsDashboardRoutingModule } from './results-dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ResultsDashboardRoutingModule
  ]
})
export class ResultsDashboardModule { }
