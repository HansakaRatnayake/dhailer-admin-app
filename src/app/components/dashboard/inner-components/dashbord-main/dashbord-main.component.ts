import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MothlySalesChartComponent} from "../../charts/mothly-sales-chart/mothly-sales-chart.component";
import {NewCustomersChartComponent} from "../../charts/new-customers-chart/new-customers-chart.component";
import {RecentOrderTableComponent} from "../../table/recent-order-table/recent-order-table.component";
import {SalesTargetChartComponent} from "../../charts/sales-target-chart/sales-target-chart.component";
import {TotalSalesChartComponent} from "../../charts/total-sales-chart/total-sales-chart.component";

@Component({
  selector: 'app-dashbord-main',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MothlySalesChartComponent,
        NewCustomersChartComponent,
        RecentOrderTableComponent,
        SalesTargetChartComponent,
        TotalSalesChartComponent
    ],
  templateUrl: './dashbord-main.component.html',
  styleUrl: './dashbord-main.component.scss'
})
export class DashbordMainComponent {

}
