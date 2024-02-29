import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { PrevNextButtonComponent } from './PrevNextButton.component';

const meta: Meta<PrevNextButtonComponent> = {
  title: 'Previous and Next Buttons',
  component: PrevNextButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs:{
      description:{
        component: "The Previous and Next buttons add additional control to how the user navigates from one tab to the next."
      }
    }
  },
  render: (args: PrevNextButtonComponent) => ({
    props: {
      ...args,
      backgroundColor: null,
      onPrevClick: () => {
        args.value--;
        action('Previous button clicked')(args.value);
      },
      onNextClick: () => {
        args.value++;
        action('Next button clicked')(args.value);
      },
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    value: {
      control: { type: 'number' },
    },
    maxValue: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<PrevNextButtonComponent>;

export const Medium: Story = {
  args: {
    size: 'medium',
    value: 0,
    maxValue: 10,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    value: 0,
    maxValue: 10,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    value: 0,
    maxValue: 10,
  },
};