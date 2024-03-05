import type { Meta, StoryObj} from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
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

export const DialogueBoxText: Story = {
  args: { 
    DialogueText: 'Excepteur sint occaecat cupidatat non proident, \
    sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
};

export const DialogueBoxScrollableText: Story = {
  args: {
    DialogueText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
    qui officia deserunt mollit anim id est laborum\
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
    qui officia deserunt mollit anim id est laborum',
  },
};