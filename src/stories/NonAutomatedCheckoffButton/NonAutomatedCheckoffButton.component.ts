import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { MatCheckboxChange } from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

import type { User } from '../user';

@Component({
  selector: 'NonAutomatedCheckoffButton',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  template: `<article [ngClass]="{'NonAutomatedCheckoffButton': true}">
    <section>
      <mat-checkbox labelPosition="before" (change)="onCheckboxChange($event)">Validate</mat-checkbox>
    </section>
  </article>`,
  styleUrls: ['./NonAutomatedCheckoffButton.css'],
})
export class NonAutomatedCheckoffButtonComponent {
  user: User | null = null;

  @Output() checkboxChange = new EventEmitter<boolean>();

  onCheckboxChange(event: MatCheckboxChange) {
    this.checkboxChange.emit(event.checked);
  }
}
