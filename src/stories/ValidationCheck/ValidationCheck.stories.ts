import type { Meta, StoryObj } from '@storybook/angular';

import { ValidationCheck} from './ValidationCheck';

const meta: Meta<ValidationCheck> = {
  title: 'Validation Check Off',
  component: ValidationCheck,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Validation Check Off will be used to have the user verify that\
          they have correctly inputted the information before they continue to\
          the next page.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ValidationCheck>;

// Exports story to storybook render
export const Base: Story = {};