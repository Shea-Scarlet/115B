import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'

import type { User } from '../user';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-component-tab-drawer',
  standalone: true,
  imports: [MatTabsModule],
  // template: `<article>
  //   <section class="TabDrawer">
  //     <h2>Tab Drawer Component</h2>
  //     <p>Tab Drawer implementation coming soon!</p>
  //   </section>
  // </article>`,
  template: `<section>
    <mat-tab-group>
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>
  </section>`,
  styleUrls: ['./TabDrawer.css'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TabDrawerComponent {
  user: User | null = null;
}
