import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'NonAutomatedCheckoffButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article [ngClass]="{'NonAutomatedCheckoffButton': true}">
    <section>
      <label>
        Validate <input type="checkbox" [checked]="isChecked" (change)="onCheckboxChange($event)">
      </label>
    </section>
  </article>`,
  styleUrls: ['./NonAutomatedCheckoffButton.css'],
})
export class NonAutomatedCheckoffButtonComponent {
  user: User | null = null;

  @Input() isChecked = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.isChecked = target.checked;
      this.checkboxChange.emit(this.isChecked);
    }
  }
}
