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
      onPrevClick: action('Previous button clicked'),
      onNextClick: action('Next button clicked'),
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;
type Story = StoryObj<PrevNextButtonComponent>;

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};