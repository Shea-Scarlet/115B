import { Meta, StoryObj } from '@storybook/angular';

import { TabDrawerComponent } from './tab-drawer.component';

const meta: Meta<TabDrawerComponent> = {
  title: 'Tab Drawer',
  tags: ['autodocs'],
  component: TabDrawerComponent,
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
};

export default meta;
type Story = StoryObj<TabDrawerComponent>;

export const Default: Story = {
  args: {
    pageTitle: "Example Title"
  }
}

export const PlaceHolder4: Story = {};

export const PlaceHolder5: Story = {};
