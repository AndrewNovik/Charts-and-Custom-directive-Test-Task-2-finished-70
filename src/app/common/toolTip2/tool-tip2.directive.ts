import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[extendMatButton]',
  standalone: true,
})
export class ToolTip2Directive {
  @Input() set isViewerDisabled(v: boolean) {
    this.matButton.disabled = v;
  }
  @Input() set viewerTooltip(v: string) {
    this.matTooltip.message = v;
  }

  constructor(private matButton: MatButton, private matTooltip: MatTooltip) {}
}
