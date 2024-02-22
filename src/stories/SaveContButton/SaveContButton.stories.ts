import type { Meta, StoryObj } from '@storybook/angular';

import { SaveContButton } from './SaveContButton';

const meta: Meta<SaveContButton> = {
  title: 'Save & Continue Button',
  component: SaveContButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Save & Continue button is used for the user to allow the user\
          to save the information they have filled out.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SaveContButton>;

// Exports story to storybook render
export const Base: Story = {};