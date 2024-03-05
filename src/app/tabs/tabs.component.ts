import { Component, Input } from '@angular/core';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TabDrawerButtonComponent } from '../tab-drawer-button/tab-drawer-button.component';
import { TabsConfig } from '../app.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabComponent, CommonModule, MatButtonModule, TabDrawerButtonComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  /**
   * set default active tab index
   */
  @Input() activeTabIndex: number = 1;

  /**
   * Object type. You can set tabs labels and their status. TODO: need to consider
   * a bit more.
   */
  @Input() tabsConfig: TabsConfig = {
    numButtons: 5,
    tabs: {
      tab1: {label: "First Tab", status: "complete"},
      tab2: {label: "Second Tab", status: "complete"},
      tab3: {label: "Third Tab", status: "complete"},
      tab4: {label: "Fourth Tab", status: "complete"},
      tab5: {label: "Fifth Tab", status: "complete"},
    }
  };

  selectTab(index: number): void {
    this.activeTabIndex = index;
  }

  objectKeys(tabsConfig: any) {
    return Object.keys(tabsConfig)
  }
}
