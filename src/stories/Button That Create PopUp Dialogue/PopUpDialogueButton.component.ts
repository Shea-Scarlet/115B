import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'PopUpDialogue-Button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./PopUpDialogueButton.css'],
})
export class PopUpDialogueButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'PopUpDialogue-Button--primary'
      : 'PopUpDialogue-Button--secondary';

    return ['PopUpDialogue-Button', `PopUpDialogue-Button--${this.size}`, mode];
  }
}
