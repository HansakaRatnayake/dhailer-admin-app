import {Component, Input, input} from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-customer-activestatus',
  standalone: true,
  imports: [
    MatSlideToggle
  ],
  templateUrl: './customer-activestatus.component.html',
  styleUrl: './customer-activestatus.component.scss'
})
export class CustomerActivestatusComponent {

@Input() customer:any;


}
