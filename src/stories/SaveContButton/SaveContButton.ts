import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'Save & Continue Button',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="Save & Continue Button">
      <h2>Save & Contine Button Component</h2>
      <p>
        Save & Continue Button implementation coming soon!
      </p>
    </section>
  </article>`,
  styleUrls: ['./SaveContButton.css'],
})
export class SaveContButton {
  user: User | null = null;
}