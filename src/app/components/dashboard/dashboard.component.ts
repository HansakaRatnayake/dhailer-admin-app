import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {SidePannelBarComponent} from "../../shared/side-pannel-bar/side-pannel-bar.component";
import {HeaderComponent} from "../../shared/header/header.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatCalendarHeader} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {TotalSalesChartComponent} from "./charts/total-sales-chart/total-sales-chart.component";
import {SalesTargetChartComponent} from "./charts/sales-target-chart/sales-target-chart.component";
import {NewCustomersChartComponent} from "./charts/new-customers-chart/new-customers-chart.component";
import {MothlySalesChartComponent} from "./charts/mothly-sales-chart/mothly-sales-chart.component";
import {RecentOrderTableComponent} from "./table/recent-order-table/recent-order-table.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    SidePannelBarComponent,
    HeaderComponent,
    MatTabGroup,
    MatTab,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    MatCalendarHeader,
    MatCardHeader,
    MatCardFooter,
    FormsModule,
    TotalSalesChartComponent,
    SalesTargetChartComponent,
    NewCustomersChartComponent,
    MothlySalesChartComponent,
    RecentOrderTableComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router : Router) {
  }

  onTabChange(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(['/main/dashboard/home']);
        break;
      case 1:
        this.router.navigate(['/main/dashboard/reports']);
        break;
      case 2:
        this.router.navigate(['/main/dashboard/settings']);
        break;
    }
  }
}
