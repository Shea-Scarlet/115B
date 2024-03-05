import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'AutomatedCheckoffButton',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <section class="AutomatedCheckoffButton">
      <div *ngIf="isTaskCompleted" class="task-container">
        <div class="checkmark-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="green"/>
            <path fill="white" d="M14.1 27.2l7.1 7.2 16.7-16.8L34.6 14l-13 13-5.6-5.6L14.1 27.2z"/>
          </svg>
        </div>
        <p class="task-status">Task is completed!</p>
      </div>
      <p *ngIf="!isTaskCompleted" class="task-status">Task is not completed.</p>
    </section>
  </article>`,
  styleUrls: ['./AutomatedCheckoffButton.css'],
})
export class AutomatedCheckoffButtonComponent {
  @Input() isTaskCompleted: boolean = false;
  user: User | null = null;
}
