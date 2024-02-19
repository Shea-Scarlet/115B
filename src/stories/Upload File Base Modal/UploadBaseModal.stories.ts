import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect } from '@storybook/test';

import { UploadBaseModal } from './UploadBaseModal';

const meta: Meta<UploadBaseModal> = {
  title: 'Upload File Base Modal',
  tags: ['autodocs'],
  component: UploadBaseModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'This component renders a base modal with the added functionality \
        of being able to upload file(s) to it. The component consists of the base modal\
        accompanied by at least one inner element that prompts the user to upload a file.\
        The inner element is a large button that consists of an icon and 2 strings of \
        text. The other elements of this components are 2 buttons, one for closing the\
        onboarding guide, and another at the bottom that only becomes clickable after the\
        user uploads a file. There are 3 possible states: before a user interacts with any\
        part of the component, after the user uploads a file, and when the user clicks on\
        the x button to close the onboarding guide.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<UploadBaseModal>;

export const PlaceHolder0: Story = {};

export const PlaceHolder1: Story = {};
