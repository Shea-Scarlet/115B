import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'SaveContinue',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="modal" [ngClass]="{'is-active': true}">
   <div class="modal-background" *ngIf="showBackground"></div>
    <div class="modal-content">
      <article>
        <section class="SaveContinue">
          <h2>Save and Continue</h2>
          <p>Click the button below to save your progress and close the page.</p>
          <button (click)="saveAndClose()">Save and Close</button>
          <p *ngIf="lastSaved">Last saved at: {{lastSaved}}</p>
        </section>
      </article>
      </div>
  </div>`,
  styleUrls: ['./SaveContinue.css'],
})
export class SaveContinueComponent {
  user: User | null = null;
  lastSaved: string | null = null;
  isActive = true;
  showBackground = true; // This property controls the visibility of the modal background
  showModal = true; // This property controls the visibility of the entire modal

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClose = new EventEmitter<string>();

  saveAndClose() {
    this.lastSaved = new Date().toLocaleString();
    this.onClose.emit(this.lastSaved);
    this.isActive = false;
  }
}