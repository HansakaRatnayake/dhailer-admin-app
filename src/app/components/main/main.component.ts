import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidePannelBarComponent} from "../../shared/side-pannel-bar/side-pannel-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
    imports: [
        RouterOutlet,
        SidePannelBarComponent
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
