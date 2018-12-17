import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvironmentSelectionComponent } from './environment-selection/environment-selection.component';


const routes: Routes = [
  {
    path: 'environments',
    component: EnvironmentSelectionComponent
  },
  {
    path: 'environments/:environment/dashboard'
  },
  {
    path: '',
    redirectTo: 'environments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
