import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TabDrawerButtonComponent } from "./tab-drawer-button.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatRipple } from "@angular/material/core";

const meta: Meta<TabDrawerButtonComponent> = {
  title: 'Tab Drawer Button',
  tags: ['autodocs'],
  component: TabDrawerButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, MatIconModule, MatButtonModule, MatRipple],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'Button used for Tab Drawer'
      },
    },
  },
  render: (args: TabDrawerButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

export default meta;
type Story = StoryObj<TabDrawerButtonComponent>;

export const Default: Story = {
  args: {
    primary: true,
    label: "1. Preparations",
    status: "complete",
    active: true
  }
}

export const Primary: Story = {
  args: {
    primary: false,
    label: "1. Preparations",
    status: "incomplete",
    active: false,
  }
}
