import type { Meta, StoryObj } from '@storybook/angular';

import { BaseModal } from './BaseModal';

const meta: Meta<BaseModal> = {
  title: 'Base Modal',
  component: BaseModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Base Modal acts as a default frame for components that can be dynamically added as needed.\
          The header contains three editable text boxes that changes based on tab drawer state or for use in pop up prompts.\
          The body portion of the modal can contain body box components or cards when used as a pop up selection.\
          The footer is available for button placement like next/previous or save and continue in cases where the modal is used as a pop up prompt.\
          Every element can be dynamically added or forgone as needed by the engineer.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BaseModal>;

// Exports story to storybook render
export const initialModal: Story = {};
