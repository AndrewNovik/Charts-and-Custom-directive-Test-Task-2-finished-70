import { Platform } from '@angular/cdk/platform';
import {
  Component,
  ComponentRef,
  ElementRef,
  Input,
  NgZone,
} from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: '[custom-mat-button]',
  standalone: true,
  imports: [MatTooltipModule, MatButtonModule],
  template:
    '<button mat-button [matTooltip]="viewerTooltip" [disabled]="isViewerDisabled">{{buttonValue}}</button>',
})
export class CustomMatButtonDirective extends MatButton {
  @Input() isViewerDisabled!: boolean;
  @Input() viewerTooltip!: string;
  @Input() buttonValue!: string;
  private componentRef: ComponentRef<any> | null = null;
  constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone) {
    super(elementRef, platform, ngZone);
  }

  ngOnInit() {
    if (this.isViewerDisabled) {
      this.disabled = true;
    }
    this.ariaDisabled = false;
  }
}
