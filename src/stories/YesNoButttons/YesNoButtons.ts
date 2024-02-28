// YesNoButtons.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'YesNoButtons',
  template: `
    <button type="button" (click)="yesClicked()" [class]="yesButtonClasses">Yes</button>
    <button type="button" (click)="noClicked()" [class]="noButtonClasses">No</button>
  `,
  styleUrls: ['./YesNoButtons.css'],
})
export class YesNoButtons {
  isYesSelected: boolean | null = null;

  get yesButtonClasses(): string {
    return this.isYesSelected === true ? 'selected yes' : 'yes';
  }

  get noButtonClasses(): string {
    return this.isYesSelected === false ? 'selected no' : 'no';
  }

  yesClicked(): void {
    this.isYesSelected = true;
    // Perform additional actions if needed
  }

  noClicked(): void {
    this.isYesSelected = false;
    // Perform additional actions if needed
  }
}
