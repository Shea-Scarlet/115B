import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/angular';
import {SaveContinueComponent} from './SaveContinue.component';

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

export const MainPage: StoryFn<SaveContinueComponent> = (args: SaveContinueComponent) => ({
  component: SaveContinueComponent,
  props: {
    ...args,
    onClose: action('Last saved at'),
    isActive: true, // This will display the modal content
    showModal: false, // This will hide the entire modal and display the button
  },
});

export const WithPage: StoryFn<SaveContinueComponent> = (args: SaveContinueComponent) => ({
  component: SaveContinueComponent,
  props: {
    ...args,
    onClose: action('Last saved at'),
    isActive: true, // This will display the modal content
    showModal: true, // This will show the entire modal
  },
});