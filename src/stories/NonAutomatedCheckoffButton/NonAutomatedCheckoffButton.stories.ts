import type { Meta, StoryObj } from '@storybook/angular';

import { NonAutomatedCheckoffButtonComponent } from './NonAutomatedCheckoffButton.component';

const meta: Meta<NonAutomatedCheckoffButtonComponent> = {
  title: 'NonAutomatedCheckoffButton',
  component: NonAutomatedCheckoffButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The NonAutomatedCheckoffButton will be used to have the user verify that\
          they have correctly inputted the information before they continue to\
          the next page.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NonAutomatedCheckoffButtonComponent>;

// Exports story to storybook render
export const Base: Story = {};