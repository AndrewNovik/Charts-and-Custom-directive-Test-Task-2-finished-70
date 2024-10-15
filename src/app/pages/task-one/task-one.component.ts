import { Component, computed, signal } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export interface Sensor {
  name: string;
  selected: boolean;
  sensors?: Sensor[];
}

@Component({
  selector: 'app-task-one',
  standalone: true,
  imports: [
    HighchartsChartModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './task-one.component.html',
  styleUrl: './task-one.component.scss',
})
export class TaskOneComponent {
  readonly sensor = signal<Sensor>({
    name: 'Sensors',
    selected: false,
    sensors: [
      { name: 'Sensor 1', selected: false },
      { name: 'Sensor 2', selected: false },
      { name: 'Sensor 3', selected: false },
      { name: 'Sensor 4', selected: false },
    ],
  });

  readonly partiallyChecked = computed(() => {
    const sensor = this.sensor();
    if (!sensor.sensors) {
      return false;
    }
    return (
      sensor.sensors.some((t) => t.selected) &&
      !sensor.sensors.every((t) => t.selected)
    );
  });

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  update(selected: boolean, index?: number) {
    this.sensor.update((sensor) => {
      if (index === undefined) {
        sensor.selected = selected;
        sensor.sensors?.forEach((t) => (t.selected = selected));
      } else {
        sensor.sensors![index].selected = selected;
        sensor.selected = sensor.sensors?.every((t) => t.selected) ?? true;
      }
      return { ...sensor };
    });
  }

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options[] = [
    {
      title: {
        text: 'Chart 1',
      },
      series: [
        {
          data: [1, 20, 3, 4, 35, 6, 10, 45, 1, 80],
          type: 'column',
        },
      ],
    },
    {
      title: {
        text: 'Chart 2',
      },
      series: [
        {
          data: [1, 20, 3, 4, 35, 6, 10, 45, 1, 80],
          type: 'line',
        },
      ],
    },
    {
      title: {
        text: 'Chart 3',
      },
      series: [
        {
          data: [1, 20, 3, 4, 35, 6, 10, 45, 1, 80],
          type: 'area',
        },
        {
          data: [5, 25, 13, 5, 18, 8, 6, 22, 7, 19],
          type: 'area',
        },
      ],
    },
    {
      title: {
        text: 'Chart 4',
      },
      series: [
        {
          data: [1, 20, 3, 45, 1, 80],
          type: 'column',
        },
        {
          data: [5, 25, 35, 25, 18, 80],
          type: 'column',
        },
      ],
    },
  ];
}
