import type { Meta, StoryObj } from '@storybook/angular';

import { PopUpFormButtonComponent } from './PopUpFormButton.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PopUpFormButtonComponent> = {
  title: 'Pop Up Form Buttons',
  component: PopUpFormButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs:{
      description:{
        // Add component description here:
        component: "The Pop Up Form buttons renders a pop up base modal when clicked.\
        The new base modal that pops up is defined by the context in which the button\
        was created. For example, the base modal that pops up could be the upload file\
        base modal, the pdf viewer base modal, etc."
      }
    }
  },
  render: (args: PopUpFormButtonComponent) => ({
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
type Story = StoryObj<PopUpFormButtonComponent>;

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