import type { Meta, StoryObj } from '@storybook/angular';

import { CheckMarkButton } from './CheckMarkButton.component';

const meta: Meta<CheckMarkButton> = {
  title: 'Check Mark Button',
  component: CheckMarkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Checkmark Button is used in the base modal. It appears when the user meets a certain\
          specifications. It should also be able to be manually checked off as a button. (we\'re not\
          sure yet)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<CheckMarkButton>;

// Exports story to storybook render
export const Checkmark: Story = {};
