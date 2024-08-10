import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {CustomerActivestatusComponent} from "./inner/customer-activestatus/customer-activestatus.component";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    CustomerActivestatusComponent
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

}
