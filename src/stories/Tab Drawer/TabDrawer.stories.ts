import type { Meta, StoryObj } from '@storybook/angular';

import { TabDrawer } from './TabDrawer.component';

const meta: Meta<TabDrawer> = {
  title: 'Tab Drawer',
  tags: ['autodocs'],
  component: TabDrawer,
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
type Story = StoryObj<TabDrawer>;

export const PlaceHolder4: Story = {};

export const PlaceHolder5: Story = {};
