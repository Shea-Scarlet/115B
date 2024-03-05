import type { Meta, StoryObj } from '@storybook/angular';

import { PopUpFormButtonComponent } from './PopUpFormButton.component';
import { BaseModalComponent } from '../Base Modal/BaseModal.component'; 
import {CardComponent} from '../Card/Card.component';

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
        The new base modal component and name of the component is passed as an \
        arguement to the button. This sets the label for the button in the process.\
        The base modal that is passed as an argument could be the upload file\
        base modal, the pdf viewer base modal, etc. The newly rendered pop up form\
        will have a z-index of 100, displaying in front of all other rendred components."
      }
    }
  },
  render: (args: PopUpFormButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { },
};

export default meta;
type Story = StoryObj<PopUpFormButtonComponent>;

export const PopUpFormWithBaseModal: Story = {
  args: {
    label: 'Pop Up Base Modal',
    customComponent: BaseModalComponent,
  },
};

export const PopUpFormWithCardComponent: Story = {
  args: {
    label: 'Show Card',
    customComponent:CardComponent,
  },
};