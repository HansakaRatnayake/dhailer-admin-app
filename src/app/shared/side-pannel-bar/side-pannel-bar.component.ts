import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {MatBadge} from "@angular/material/badge";
import {TuiAvatar, TuiBadge, TuiStatus} from "@taiga-ui/kit";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-side-pannel-bar',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    MatBadge,
    TuiAvatar,
    TuiBadge,
    TuiStatus,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-pannel-bar.component.html',
  styleUrl: './side-pannel-bar.component.scss'
})
export class SidePannelBarComponent {

}
