import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NonAutomatedCheckoffButtonComponent } from './NonAutomatedCheckoffButton.component';

export default {
  title: 'NonAutomatedCheckoffButton',
  component: NonAutomatedCheckoffButtonComponent,
  argTypes: {
    checkboxChange: { action: 'checkboxChange', table: { type: { summary: 'boolean' } } },
  },
} as Meta;

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