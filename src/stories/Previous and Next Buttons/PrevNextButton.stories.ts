import type { Meta, StoryObj } from '@storybook/angular';

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
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: { // Add this
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;
type Story = StoryObj<PrevNextButtonComponent>;

export const Medium: Story = { // Rename this
  args: {
    size: 'medium',
  },
};

export const Small: Story = { // Rename this
  args: {
    size: 'small',
  },
};

export const Large: Story = { // And this
  args: {
    size: 'large',
  },
};