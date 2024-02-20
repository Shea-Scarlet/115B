import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'ValidationCheck',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="ValidationCheck">
      <h2>Validation Check Off</h2>
      <p>Validation Check implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./ValidationCheck.css'],
})
export class ValidationCheck {
  user: User | null = null;
}