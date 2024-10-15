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
import { CustomMatButtonDirective } from '../../common/custom-mat-button/custom-mat-button.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolTip2Directive } from '../../common/toolTip2/tool-tip2.directive';

@Component({
  selector: 'app-task-two',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    TooltipDirective,
    CustomMatButtonDirective,
    ToolTip2Directive,
  ],
  templateUrl: './task-two.component.html',
  styleUrl: './task-two.component.scss',
})
export class TaskTwoComponent {
  checkIsViewerDisabled: boolean = false;

  change() {
    this.checkIsViewerDisabled = !this.checkIsViewerDisabled;
  }
}
