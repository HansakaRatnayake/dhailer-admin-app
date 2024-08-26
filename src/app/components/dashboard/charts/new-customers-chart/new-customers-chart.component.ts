import { Component } from '@angular/core';
import {TuiPieChart} from "@taiga-ui/addon-charts";
import {TuiAmountPipe} from "@taiga-ui/addon-commerce";
import {AsyncPipe} from "@angular/common";
import {TuiHintOptionsDirective} from "@taiga-ui/core";

@Component({
  selector: 'app-new-customers-chart',
  standalone: true,
  imports: [
    TuiPieChart,
    TuiAmountPipe,
    AsyncPipe,
    TuiHintOptionsDirective
  ],
  templateUrl: './new-customers-chart.component.html',
  styleUrl: './new-customers-chart.component.scss'
})
export class NewCustomersChartComponent {

  protected readonly value = [13769, 12367, 10172, 3018, 2592];
  protected readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

}
