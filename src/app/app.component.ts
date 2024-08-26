import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidePannelBarComponent} from "./shared/side-pannel-bar/side-pannel-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, SidePannelBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dhailer-admin';
}
