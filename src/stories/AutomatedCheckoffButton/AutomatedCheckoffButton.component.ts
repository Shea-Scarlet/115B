import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'AutomatedCheckoffButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="AutomatedCheckoffButton">
      <h2>AutomatedCheckoffButton Off</h2>
      <p>AutomatedCheckoffButton implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./AutomatedCheckoffButton.css'],
})
export class AutomatedCheckoffButtonComponent {
  user: User | null = null;
}