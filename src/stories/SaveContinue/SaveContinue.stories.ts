import type { Meta, StoryObj } from '@storybook/angular';
import {SaveContinueComponent} from './SaveContinue.component';
import { BaseModalComponent } from '../Base Modal/BaseModal.component'; 


const meta: Meta<SaveContinueComponent> = {
  title: 'Save and Continue',
  component: SaveContinueComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The Save and Continue button will allow the user to save\
          any to all information that they have filled out in the\
          forms',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SaveContinueComponent>;

export const SaveAndContinue: Story = {
  args: {
    label: 'Save and Close',
    customComponent: BaseModalComponent,
  },
};