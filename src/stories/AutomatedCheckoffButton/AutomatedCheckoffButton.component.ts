import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'AutomatedCheckoffButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="AutomatedCheckoffButton">
      <h2>Validation Check Off</h2>
      <p>Validation Check implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./AutomatedCheckoffButton.css'],
})
export class AutomatedCheckoffButtonComponent {
  user: User | null = null;
}