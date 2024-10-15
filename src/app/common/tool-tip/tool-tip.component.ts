import { Component, OnInit } from '@angular/core';
import { TooltipPosition, TooltipTheme } from './tooltip.enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tooltip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TooltipComponent implements OnInit {
  tooltipPosition: string = TooltipPosition.DEFAULT;
  tooltipTheme: string = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;

  constructor() {}

  ngOnInit(): void {}
}
