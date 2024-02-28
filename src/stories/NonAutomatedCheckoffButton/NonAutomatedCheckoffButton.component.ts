import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'NonAutomatedCheckoffButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="NonAutomatedCheckoffButton">
      <h2>NonAutomatedCheckoffButtonComponent Off</h2>
      <p>NonAutomatedCheckoffButtonComponent implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./NonAutomatedCheckoffButton.css'],
})
export class NonAutomatedCheckoffButtonComponent {
  user: User | null = null;
}