import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {HeaderComponent} from "../../shared/header/header.component";

@Component({
  selector: 'app-order',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        MatTooltip,
        HeaderComponent
    ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

}
