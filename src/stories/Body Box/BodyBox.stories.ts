import type { Meta, StoryObj } from '@storybook/angular';

import { BodyBox } from './BodyBox.component';

const meta: Meta<BodyBox> = {
  title: 'BodyBox',
  component: BodyBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'BodyBox have the ability to contain any component and description elements allowing it to create\
          responsive layouts with ease. By default, it should render \'div\' element. Provides a shorthand way\
          to pass styles via props.'
      },
    },
  },
};

export default meta;
type Story = StoryObj<BodyBox>;

// Exports story to storybook render
export const BoxDiv: Story = {};
