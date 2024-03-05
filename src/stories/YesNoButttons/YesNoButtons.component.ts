//
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'YesNoButtons',
  template: `
  <div>
    <button type="button" (click)="toggleSelection(true)" [class]="yesButtonClasses">Yes</button>
    <button type="button" (click)="toggleSelection(false)" [class]="noButtonClasses">No</button>
    </div>
  `,
  styleUrls: ['./YesNoButtons.css'],
})

//isYesSelected

export class YesNoButtons {
  isYesSelected: boolean | null = null;
  get yesButtonClasses(): string {
    return this.isYesSelected === true ? 'selected yes' : 'yes';
  }

  get noButtonClasses(): string {
    return this.isYesSelected === false ? 'selected no' : 'no';
  }

  @Output()

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix

  onClick = new EventEmitter<boolean>();

  toggleSelection(value: boolean) {
    this.isYesSelected = value;
    this.onClick.emit(value);
  }
}

///