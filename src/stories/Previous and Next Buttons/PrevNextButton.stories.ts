import type { Meta, StoryObj } from '@storybook/angular';

import { PrevNextButtonComponent } from './PrevNextButton.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PrevNextButtonComponent> = {
  title: 'Previous and Next Buttons',
  component: PrevNextButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs:{
      description:{
        // Add component description here:
        component: "The Previous and Next buttons add aditional control to how the user\
        navigates from one tab to the next."
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
  },
};

export default meta;
type Story = StoryObj<PrevNextButtonComponent>;

export const PlaceHolder0: Story = {
  args: {
    label: 'Button',
  },
};

export const PlaceHolder1: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};