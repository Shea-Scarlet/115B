import type { Meta, StoryObj } from '@storybook/angular';

import { PopUpDialogueButtonComponent } from './PopUpDialogueButton.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PopUpDialogueButtonComponent> = {
  title: 'Pop Up Dialogue Buttons',
  component: PopUpDialogueButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs:{
      description:{
        // Add component description here:
        component: "The Pop Up Dialogue button renders a pop up dialogue window when clicked."
      }
    }
  },
  render: (args: PopUpDialogueButtonComponent) => ({
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
type Story = StoryObj<PopUpDialogueButtonComponent>;

export const PlaceHolder2: Story = {
  args: {
    label: '?',
  },
};

export const PlaceHolder3: Story = {
  args: { 
    size: 'large',
    label: '?',
  },
};