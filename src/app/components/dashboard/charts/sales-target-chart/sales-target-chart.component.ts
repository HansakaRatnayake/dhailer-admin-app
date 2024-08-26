import { Component } from '@angular/core';
import {TuiBarSet} from "@taiga-ui/addon-charts";

@Component({
  selector: 'app-sales-target-chart',
  standalone: true,
  imports: [
    TuiBarSet
  ],
  templateUrl: './sales-target-chart.component.html',
  styleUrl: './sales-target-chart.component.scss'
})
export class SalesTargetChartComponent {
  protected readonly value = [30, 15, 10];


}
