import type { Meta, StoryObj } from '@storybook/angular';

import { YesNoButtonsComponent} from './YesNoButtons.component';

const meta: Meta<YesNoButtonsComponent> = {
  title: 'Yes No Buttons',
  component: YesNoButtonsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Yes No Buttons can be used as a selector for use in body boxes\
          where the task can be optional saving the users choice as the buttons final state.',
      },
    },
  },
};
//
export default meta;
type Story = StoryObj<YesNoButtonsComponent>;

export const NoInput = {
  args:{
    isYesSelected: null

  }
}

export const YesClicked = {
  args:{
    isYesSelected: true

  }
}

export const NoClicked = {
  args:{
    isYesSelected: false

  }
}


// Exports story to storybook render
export const Base: Story = {};
///
