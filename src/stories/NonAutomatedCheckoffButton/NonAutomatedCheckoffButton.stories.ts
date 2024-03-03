import type { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

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

export const Base: Story<NonAutomatedCheckoffButtonComponent> = (args: NonAutomatedCheckoffButtonComponent) => ({
  component: NonAutomatedCheckoffButtonComponent,
  props: {
    ...args,
    checkboxChange: action('Checkbox state changed')
  }
});
