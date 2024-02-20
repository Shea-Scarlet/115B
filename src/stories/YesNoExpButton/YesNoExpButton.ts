import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'YesNoExpButtons',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="YesNoExpButtons">
      <h2>Yes No Buttons Expansion Component</h2>
      <p>Yes No Button Expansion implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./YesNoExpButtons.css'],
})
export class YesNoExpButtons {
  user: User | null = null;
}