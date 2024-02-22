import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="Card">
      <h2>Card Component</h2>
      <p>Card implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./Card.css'],
})
export class Card {
  user: User | null = null;
}