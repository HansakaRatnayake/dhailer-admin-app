import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MothlySalesChartComponent} from "../../charts/mothly-sales-chart/mothly-sales-chart.component";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-recent-order-table',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MothlySalesChartComponent,
    NgForOf,
    MatButton,
    MatPaginator
  ],
  templateUrl: './recent-order-table.component.html',
  styleUrl: './recent-order-table.component.scss'
})
export class RecentOrderTableComponent {

  sampledata : OrderDetails[] = [
        {ordernumber:1001,customername:"Hansaka Rathnayake",address:"Colombo",total:2500,status:"active"},
        {ordernumber:1002,customername:"Kamal Perera",address:"Kurunegala",total:1500,status:"shipped"},
        {ordernumber:1003,customername:"Gamunu Hadawath",address:"Gampaha",total:4500,status:"cancel"},
        {ordernumber:1004,customername:"Tehan Perera",address:"Colombo",total:6300,status:"active"},
        {ordernumber:1005,customername:"Sakala Bujan",address:"Colombo",total:3440,status:"shipped"},
        {ordernumber:1006,customername:"Sukiri Putha",address:"Anuradhapura",total:2800,status:"pending"}
  ]


}

interface OrderDetails{
  ordernumber : number,
  customername : string,
  address : string,
  total:number,
  status:string
}
