import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
export interface TabInfo {
  label: string;
  status: 'incomplete' | 'complete';
}

export interface TabsConfig {
  numButtons: number;
  tabs: { [key: string]: TabInfo };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-tabs [tabsConfig]="tabsConfig" [activeTabIndex]="defaultActiveTabIndex"></app-tabs>
    </section>
  </main>
`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-storybook-project';
  tabs = ['First', 'Second', 'Third', 'Fourth'];
  defaultActiveTabIndex: number = 3;
  tabsConfig: TabsConfig = {
    numButtons: 5,
    tabs: {
      tab1: {label: "1. Preparations", status: "complete"},
      tab2: {label: "2. Data Sources", status: "complete"},
      tab3: {label: "3. Risks & LSAs", status: "incomplete"},
      tab4: {label: "4. Ticketing & Remedations", status: "incomplete"},
      tab5: {label: "5. Review & Reports", status: "incomplete"},
    }
  }
}
