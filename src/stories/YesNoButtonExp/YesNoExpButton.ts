import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'YesNoExpButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="YesNoExpButton">
      <h2>Yes No Buttons Expansion Component</h2>
      <p>Yes No Button Expansion implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./YesNoExpButton.css'],
})
export class YesNoExpButton {
  user: User | null = null;
}