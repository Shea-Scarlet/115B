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
        component: "The Pop Up Dialogue button renders a pop up\
         dialogue window when clicked."
      }
    }
  },
  render: (args: PopUpDialogueButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
}

export default meta;
type Story = StoryObj<PopUpDialogueButtonComponent>;

export const PlaceHolder2: Story = {
  args: {
    DialogueText: '?',
  },
};

export const PlaceHolder3: Story = {
  args: { 
    DialogueText: '?',
  },
};