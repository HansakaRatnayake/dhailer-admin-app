import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SidePannelBarComponent} from "../../shared/side-pannel-bar/side-pannel-bar.component";
import {HeaderComponent} from "../../shared/header/header.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatCalendarHeader} from "@angular/material/datepicker";
import {TuiCardMedium} from "@taiga-ui/layout";
import {TUI_MONTHS, TuiHintOptionsDirective, TuiPoint, TuiSurface, TuiTitle} from "@taiga-ui/core";
import {
  TUI_IS_E2E,
  TuiContext,
  TuiDay,
  TuiDayLike,
  TuiDayRange,
  TuiMonth,
  tuiPure,
  TuiStringHandler
} from "@taiga-ui/cdk";
import {
  TuiArcChart,
  TuiAxes,
  TuiBarSet,
  TuiLineChart,
  TuiLineDaysChart,
  TuiLineDaysChartHint,
  TuiPieChart
} from "@taiga-ui/addon-charts";
import {TuiAmountPipe} from "@taiga-ui/addon-commerce";
import {AsyncPipe, NgIf} from "@angular/common";
import {map, Observable} from "rxjs";
import {FormsModule} from "@angular/forms";

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
    TuiCardMedium,
    TuiSurface,
    TuiTitle,
    MatCardFooter,
    TuiAxes,
    TuiLineDaysChartHint,
    TuiLineChart,
    TuiArcChart,
    TuiPieChart,
    TuiHintOptionsDirective,
    TuiAmountPipe,
    AsyncPipe,
    TuiBarSet,
    TuiLineDaysChart,
    FormsModule,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  protected readonly value1: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
  // =====>
  protected readonly stringify = String;

  protected readonly hintContent = ({
                                      $implicit,
                                    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0][1];

  // =====>
  protected readonly value2 = [40, 30];


  // =====>
  protected readonly value3 = [13769, 12367, 10172, 3018, 2592];
  protected readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];



//   ================================>


  private readonly isE2E = inject(TUI_IS_E2E);
  private readonly months$ = inject(TUI_MONTHS);

  protected range = new TuiDayRange(
    TuiDay.currentLocal(),
    TuiDay.currentLocal().append({year: 1}),
  );

  protected readonly maxLength = {month: 12};

  protected readonly xStringify$: Observable<TuiStringHandler<TuiDay>> =
    this.months$.pipe(
      map(
        (months) =>
          ({month, day}) =>
            `${months[month]}, ${day}`,
      ),
    );

  protected get value(): ReadonlyArray<[TuiDay, number]> {
    return this.computeValue(this.range);
  }

  @tuiPure
  protected computeLabels$({
                             from,
                             to,
                           }: TuiDayRange): Observable<ReadonlyArray<string | null>> {
    return this.months$.pipe(
      map((months) => [
        ...Array.from(
          {length: TuiMonth.lengthBetween(from, to) + 1},
          (_, i) => months[from.append({month: i}).month],
        ),
        null,
      ]),
    );
  }

  protected readonly yStringify: TuiStringHandler<number> = (y) =>
    `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;

  @tuiPure
  private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {
    return new Array(TuiDay.lengthBetween(from, to) + 1)
      .fill(0)
      .reduce<
        ReadonlyArray<[TuiDay, number]>
      >((array, _, i) => [...array, [from.append({day: i}), this.isE2E ? 100 : (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5]], []);
  }

}
