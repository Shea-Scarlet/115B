import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { BodyBoxComponent } from './body-box/body-box.component';
import { MatButtonModule } from '@angular/material/button';
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
  imports: [TabsComponent, BodyBoxComponent, MatButtonModule],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-tabs [tabsConfig]="tabsConfig" [activeTabIndex]="defaultActiveTabIndex"></app-tabs>
      <app-body-box padding="20px 40px" bgColor="#F2F3F4" display="flex" gap="20px">
        <app-body-box width="100px" height="100px" bgColor="green">Green</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="red">Red</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="blue">Blue</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="yellow">Yellow</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="orange">Orange</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="purple">Purple</app-body-box>
      </app-body-box>
      <app-body-box bgColor="white" maxWidth="872px" padding="10px 24px">
        <app-body-box display="flex" flexDirection="column" padding="0px 0px 24px 0px" gap="24px">
          <app-body-box display="flex" justifyContent="space-between" alignItems="center">
            <app-body-box display="flex" flexDirection="column" alignItems="flex-start" gap="10px">
              <strong>(option1)</strong>
              <p>Choose and set up your sign in method</p>
            </app-body-box>
            <app-body-box display="flex" justifyContent="center" alignItems="center" gap="10px">
              <button mat-raised-button color="accent">Single Sign On</button>
              <button mat-raised-button color="accent">Multifactor Authentication</button>
            </app-body-box>
          </app-body-box>
          <app-body-box display="flex" justifyContent="space-between" alignItems="center">
            <app-body-box display="flex" flexDirection="column" alignItems="flex-start" gap="10px">
              <strong>(option2)</strong>
              <p>Choose and set up your sign in method</p>
            </app-body-box>
            <app-body-box display="flex" justifyContent="center" alignItems="center" gap="10px">
              <button mat-raised-button color="accent">Hello</button>
              <button mat-raised-button color="accent">Sunny day: Sun</button>
            </app-body-box>
          </app-body-box>
        </app-body-box>
      </app-body-box>
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
