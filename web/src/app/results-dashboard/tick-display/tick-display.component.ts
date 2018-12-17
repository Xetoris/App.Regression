import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RegressionResultInterface } from '../../app-services/regression-app/models/regression-result.interface';
import {ResultDetailModalComponent} from '../result-detail-modal/result-detail-modal.component';

@Component({
  selector: 'app-tick-display',
  templateUrl: './tick-display.component.html',
  styleUrls: ['./tick-display.component.scss']
})
export class TickDisplayComponent implements OnInit {

  resultSet: Array<RegressionResultInterface>;
  displayPerRow: number;
  perRowOptions: Array<number> = [10, 20, 30, 50];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.displayPerRow = 30;
    this.resultSet = [];
  }

  /**
   * Presents the modal with information about the targeted result.
   * @param toFocus - Model we want to focus on.
   */
  focusResult(toFocus: RegressionResultInterface) {
    this.dialog.open(ResultDetailModalComponent, {
      data: toFocus
    });
  }
}
