import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'BodyBox',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="BodyBox">
      <h2>Body Box Component</h2>
      <p>Body Box implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./BodyBox.css'],
})
export class BodyBox {
  user: User | null = null;
}
