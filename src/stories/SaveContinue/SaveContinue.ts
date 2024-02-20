import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'SaveContinue',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="SaveContinue">
      <h2>Save and Continue</h2>
      <p>Save Continue button implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./SaveContinue.css'],
})
export class SaveContinue {
  user: User | null = null;
}