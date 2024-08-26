import { Component } from '@angular/core';
import {TuiAxes, TuiLineChart, TuiLineDaysChartHint} from "@taiga-ui/addon-charts";
import {TuiPoint} from "@taiga-ui/core";
import {TuiContext} from "@taiga-ui/cdk";

@Component({
  selector: 'app-total-sales-chart',
  standalone: true,
  imports: [
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChartHint
  ],
  templateUrl: './total-sales-chart.component.html',
  styleUrl: './total-sales-chart.component.scss'
})
export class TotalSalesChartComponent {

  protected readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];

  protected readonly stringify = String;

  protected readonly hintContent = ({
                                      $implicit,
                                    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0][1];
}
