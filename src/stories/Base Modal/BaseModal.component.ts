import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'BaseModal',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="BaseModal">
      <h2>Base Modal Component</h2>
      <p>Base Modal implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./BaseModal.css'],
})
export class BaseModal {
  user: User | null = null;
}
