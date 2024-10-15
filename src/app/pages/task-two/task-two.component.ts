import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipDirective } from '../../common/tool-tip/tool-tip.directive';
import {
  TooltipPosition,
  TooltipTheme,
} from '../../common/tool-tip/tooltip.enums';

@Component({
  selector: 'app-task-two',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    TooltipDirective,
  ],
  templateUrl: './task-two.component.html',
  styleUrl: './task-two.component.scss',
})
export class TaskTwoComponent implements OnInit {
  TooltipPosition = TooltipPosition;
  TooltipTheme = TooltipTheme;
  ngOnInit(): void {}
}
