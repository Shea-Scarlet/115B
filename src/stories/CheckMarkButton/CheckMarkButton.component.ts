import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'CheckMarkButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="CheckMarkButton">
      <h2>Check Mark Button Component</h2>
      <p>Check Mark Button implementation tba</p>
    </section>
  </article>`,
  styleUrls: ['./CheckMarkButton.css'],
})
export class CheckMarkButton {
  user: User | null = null;
}
