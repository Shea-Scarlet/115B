import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'TabDrawer',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="TabDrawer">
      <h2>Tab Drawer Component</h2>
      <p>Tab Drawer implementation coming soon!</p>
    </section>
  </article>`,
  styleUrls: ['./TabDrawer.css'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TabDrawer {
  user: User | null = null;
}
