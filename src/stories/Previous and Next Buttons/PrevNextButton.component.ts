import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'PrevNext-Button',
  template: `
    <button
      type="button"
      (click)="onPrevClick.emit()"
      [class]="prevButtonClasses"
    >
      Previous
    </button>
    <button
      type="button"
      (click)="onNextClick.emit()"
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

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onPrevClick = new EventEmitter<void>();

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onNextClick = new EventEmitter<void>();

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