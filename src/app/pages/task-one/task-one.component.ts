import { Component, computed, signal } from '@angular/core';
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

import { CommonModule, JsonPipe } from '@angular/common';
import { ChartComponent } from './chart/chart.component';

export interface Sensor {
  name: string;
  selected: boolean;
  sensors?: Sensor[];
}

@Component({
  selector: 'app-task-one',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    ChartComponent,
  ],
  templateUrl: './task-one.component.html',
  styleUrl: './task-one.component.scss',
})
export class TaskOneComponent {
  readonly sensor = signal<Sensor>({
    name: 'Sensors',
    selected: false,
    sensors: [
      { name: 'Sensor 1', selected: true },
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

  // readonly range = new FormGroup({
  //   start: new FormControl<Date | null>(null),
  //   end: new FormControl<Date | null>(null),
  // });

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
}
