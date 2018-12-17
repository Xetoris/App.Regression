import {
  Component,
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA
} from '@angular/material';

import { RegressionResultInterface } from '../../app-services/regression-app/models/regression-result.interface';

@Component({
  selector: 'app-result-detail-modal',
  templateUrl: './result-detail-modal.component.html',
  styleUrls: ['./result-detail-modal.component.scss']
})
export class ResultDetailModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RegressionResultInterface
  ) { }
}
