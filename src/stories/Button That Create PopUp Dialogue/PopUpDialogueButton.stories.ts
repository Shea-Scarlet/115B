import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PopUpDialogueButtonComponent, PopUpDialogue } from './PopUpDialogueButton.component'; // Replace 'your-component-file' with the actual file name

const meta: Meta<PopUpDialogueButtonComponent> = {
  title: 'Pop Up Dialogue Buttons',
  component:PopUpDialogueButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatDialogModule, MatButtonModule, BrowserAnimationsModule],
      declarations: [PopUpDialogue],
    }),
  ],
  parameters:{
    docs:{
      description:{
        component: "The Pop Up Dialogue button renders a pop up\
         dialogue window when clicked. Angular Material is used to\
         generate this component. Click outside of the dialogue popup\
         to close it."
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