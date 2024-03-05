import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NonAutomatedCheckoffButtonComponent } from './NonAutomatedCheckoffButton.component';

const meta: Meta<NonAutomatedCheckoffButtonComponent> = {
  title: 'Non Automated Checkoff Button',
  component: NonAutomatedCheckoffButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The NonAutomatedCheckoffButton will be used to have the user select that\
          they have correctly inputted the information before they continue to\
          the next page.',
      },
    },
  },
};

export default meta;

export const Check: StoryObj<NonAutomatedCheckoffButtonComponent> = (args: NonAutomatedCheckoffButtonComponent) => ({
  component: NonAutomatedCheckoffButtonComponent,
  props: {
    ...args,
    checkboxChange: action('checkboxChange'),
  },
});
Check.args = {
  user: null,
  isChecked: true,
};

export const Uncheck: StoryObj<NonAutomatedCheckoffButtonComponent> = (args: NonAutomatedCheckoffButtonComponent) => ({
  component: NonAutomatedCheckoffButtonComponent,
  props: {
    ...args,
    checkboxChange: action('checkboxChange'),
  },
});
Uncheck.args = {
  user: null,
  isChecked: false,
};