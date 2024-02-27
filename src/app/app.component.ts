import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabDrawerComponent } from './tab-drawer/tab-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabDrawerComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-tab-drawer></app-tab-drawer>
    </section>
  </main>
`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-storybook-project';
}
