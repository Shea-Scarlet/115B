import { Meta, StoryObj } from "@storybook/angular";
import { TabsComponent } from "./tabs.component";

const meta: Meta<TabsComponent> = {
  title: 'Tab Drawer',
  component: TabsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'This component renders the tab section above the base modal, where the user will see the title of the tab \
          as well as all the tab names, and click through them while completing the forms. \
          The tabs that are "completed" will be marked with a green checkmark.'
      },
    },
  },
}

export default meta;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  args: {
    activeTabIndex: 3,
    tabsConfig: {
      numButtons: 5,
      tabs: {
        tab1: {label: "1. Preparations", status: "complete"},
        tab2: {label: "2. Data Sources", status: "complete"},
        tab3: {label: "3. Risks & LSAs", status: "inProgress"},
        tab4: {label: "4. Ticketing & Remedations", status: "incomplete"},
        tab5: {label: "5. Review & Reports", status: "incomplete"},
      }
    }
  }
}

// @Component({
//   selector: 'app-tabs',
//   standalone: true,
//   imports: [TabComponent, CommonModule, MatButtonModule, TabDrawerButtonComponent],
//   templateUrl: './tabs.component.html',
//   styleUrl: './tabs.component.css'
// })
// export class TabsComponent {
//   @Input() tabsConfig: TabsConfig = {
//     numButtons: 5,
//     tabs: {
//       tab1: {label: "First Tab", status: "complete"},
//       tab2: {label: "Second Tab", status: "complete"},
//       tab3: {label: "Third Tab", status: "complete"},
//       tab4: {label: "Fourth Tab", status: "complete"},
//       tab5: {label: "Fifth Tab", status: "complete"},
//     }
//   };
//   activeTabIndex = 0;

//   selectTab(index: number): void {
//     this.activeTabIndex = index;
//   }

//   objectKeys(tabsConfig: any) {
//     return Object.keys(tabsConfig)
//   }
// }
