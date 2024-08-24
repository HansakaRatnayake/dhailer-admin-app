import { Component } from '@angular/core';
import {TuiAvatar, TuiBadgedContentComponent, TuiBadgedContentDirective, TuiBadgeNotification} from "@taiga-ui/kit";
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        TuiAvatar,
        MatIcon,
        MatBadge,
        TuiBadgeNotification,
        TuiBadgedContentComponent,
        TuiBadgedContentDirective,
        MatIconButton,
        MatTooltip
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
