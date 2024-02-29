// // YesNoButtons.component.ts

// import { Component } from '@angular/core';
// import { Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'YesNoButtons',
//   template: `
//     <button type="button" (click)="onClick.emit($event)" [class]="yesButtonClasses">Yes</button>
//     <button type="button" (click)="noClick.emit($event)" [class]="noButtonClasses">No</button>
//   `,
//   styleUrls: ['./YesNoButtons.css'],
// })
// export class YesNoButtons {
//   isYesSelected: boolean | null = null;

//   get yesButtonClasses(): string {
//     return this.isYesSelected === true ? 'selected yes' : 'yes';
//   }

//   get noButtonClasses(): string {
//     return this.isYesSelected === false ? 'selected no' : 'no';
//   }

//   @Output()
//   // eslint-disable-next-line @angular-eslint/no-output-on-prefix
//   onClick = new EventEmitter<Event>();

//   @Output()
//   // eslint-disable-next-line @angular-eslint/no-output-on-prefix
//   onClick = new EventEmitter<Event>();

//   yesClicked(): void {
//     this.isYesSelected = true;
//     // Perform additional actions if needed
//   }

//   noClicked(): void {
//     this.isYesSelected = false;
//     // Perform additional actions if needed
//   }
// }
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'YesNoButtons',
  template: `
    <button type="button" (click)="toggleSelection(true)" [class]="yesButtonClasses">Yes</button>
    <button type="button" (click)="toggleSelection(false)" [class]="noButtonClasses">No</button>
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

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<boolean>();

  toggleSelection(value: boolean) {
    this.isYesSelected = value;
    this.onClick.emit(value);
  }
}
///