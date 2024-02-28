import type { Meta, StoryObj } from '@storybook/angular';

import { AutomatedCheckoffButtonComponent } from './AutomatedCheckoffButton.component';

const meta: Meta<AutomatedCheckoffButtonComponent> = {
  title: 'AutomatedCheckoffButton',
  component: AutomatedCheckoffButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The AutomatedCheckoffButton will be used to have the user verify that\
          they have correctly inputted the information before they continue to\
          the next page.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<AutomatedCheckoffButtonComponent>;

// Exports story to storybook render
export const Base: Story = {};