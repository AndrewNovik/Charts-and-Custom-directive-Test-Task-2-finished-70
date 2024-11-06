import { Component, Input } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

type ChartType = 'line' | 'column';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() index!: number;
  _chartType: ChartType;

  get chartType(): ChartType {
    return this._chartType;
  }

  set chartType(v: ChartType) {
    this._chartType = v;
  }

  Highcharts: typeof Highcharts;
  chartOptions: Highcharts.Options[];
  updateFlag: boolean = false;

  constructor() {
    this._chartType = 'line';
    this.Highcharts = Highcharts;
    this.chartOptions = [
      {
        title: {
          text: 'Sensor 1',
        },
        series: [
          {
            data: [1, 20, 3, 4, 35, 6, 10, 45, 1, 80],
            type: this.chartType,
          },
        ],
      },
      {
        title: {
          text: 'Sensor 2',
        },
        series: [
          {
            data: [1, 20, 3, 4, 35, 6, 10, 45, 1, 80],
            type: this.chartType,
          },
        ],
      },
      {
        title: {
          text: 'Sensor 3',
        },
        series: [
          {
            data: [1, 20, 3, 4, 35, 6, 10, 45, 1, 80],
            type: this.chartType,
          },
          {
            data: [5, 25, 13, 5, 18, 8, 6, 22, 7, 19],
            type: this.chartType,
          },
        ],
      },
      {
        title: {
          text: 'Sensor 4',
        },
        series: [
          {
            data: [1, 20, 3, 45, 1, 80],
            type: this.chartType,
          },
          {
            data: [5, 25, 35, 25, 18, 80],
            type: this.chartType,
          },
        ],
      },
    ];
  }

  changeChartType(index: number, event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.chartOptions[index].series?.forEach(
      (elem) => (elem.type = target.checked ? 'column' : 'line')
    );
    this.updateFlag = true;
  }
}
