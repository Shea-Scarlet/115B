import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'YesNoButtons',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="YesNoButtons">
      <h2>Yes No Buttons Component</h2>
      <p>Yes No Button implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./YesNoButtons.css'],
})
export class YesNoButtons {
  user: User | null = null;
}