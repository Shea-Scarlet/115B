import type { Meta, StoryObj } from '@storybook/angular';

import { Card } from './Card.component';

const meta: Meta<Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'Cards have the ability to contain a custom title and description elements allowing it to\
          act as a full more informed button or take on more elements like a logo as well as some other\
          data fields for the user to see as well as a user-interactable checkbox for more of a check-list use',
      },
    },
  },
};

export default meta;
type Story = StoryObj<Card>;

// Exports story to storybook render
export const BaseCard: Story = {};