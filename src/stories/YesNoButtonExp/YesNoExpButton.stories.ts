import type { Meta, StoryObj } from '@storybook/angular';

import { YesNoExpButton } from './YesNoExpButton';

const meta: Meta<YesNoExpButton> = {
  title: 'Yes No Buttons Expansion',
  component: YesNoExpButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Yes No Buttons can be used as a selector for use in body boxes\
          where the task can be optional saving the users choice as the buttons\
          final state. However this button expands when the user fills in the Yes\
          or No option. This allows the engineer to add another portion of the\
          form for the user to fill out.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<YesNoExpButton>;

// Exports story to storybook render
export const Base: Story = {};