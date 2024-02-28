import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'PrevNext-Button',
  template: `
    <button
      *ngIf="value > 0"
      type="button"
      (click)="prevClicked()"
      [class]="prevButtonClasses"
    >
      Previous
    </button>
    <button
      *ngIf="value < maxValue"
      type="button"
      (click)="nextClicked()"
      [class]="nextButtonClasses"
    >
      Next
    </button>
  `,
  styleUrls: ['./PrevNextButton.css'],
})
export class PrevNextButtonComponent {
  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  value = 0;

  @Input()
  maxValue = 10;

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onPrevClick = new EventEmitter<number>();

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onNextClick = new EventEmitter<number>();

  prevClicked() {
    if (this.value > 0) {
      this.value--;
      this.onPrevClick.emit(this.value);
    }
  }

  nextClicked() {
    if (this.value < this.maxValue) {
      this.value++;
      this.onNextClick.emit(this.value);
    }
  }

  public get prevButtonClasses(): string {
    const mode = this.primary
      ? 'PrevNext-Button--primary'
      : 'PrevNext-Button--secondary';

    return `PrevNext-Button PrevNext-Button--previous PrevNext-Button--${this.size} ${mode}`;
  }

  public get nextButtonClasses(): string {
    const mode = this.primary
      ? 'PrevNext-Button--primary'
      : 'PrevNext-Button--secondary';

    return `PrevNext-Button PrevNext-Button--next PrevNext-Button--${this.size} ${mode}`;
  }
}

@NgModule({
  declarations: [PrevNextButtonComponent],
  imports: [CommonModule],
  exports: [PrevNextButtonComponent]
})
export class PrevNextButtonModule { }