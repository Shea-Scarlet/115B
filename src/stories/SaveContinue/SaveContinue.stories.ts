import type { Meta, StoryObj } from '@storybook/angular';
//
import {SaveContinue} from './SaveContinue.component';

const meta: Meta<SaveContinue> = {
  title: 'Save and Continue',
  component: SaveContinue,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Save and Continue button will allow the user to save\
          any to all information that they have filled out in the\
          forms',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SaveContinue>;

// Exports story to storybook render
export const Base: Story = {};