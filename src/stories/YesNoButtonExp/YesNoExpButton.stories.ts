import type { Meta, StoryObj } from '@storybook/angular';

import { YesNoExpButton } from './YesNoExpButton.component';
import { YesNoButtonsComponent } from '../YesNoButttons/YesNoButtons.component';
import { BaseModalComponent } from '../Base Modal/BaseModal.component';
import {CardComponent} from '../Card/Card.component';
import {SaveContinueComponent} from '../SaveContinue/SaveContinue.component';

const meta: Meta<YesNoExpButton> = {
  title: 'Yes No Buttons Expansion',
  component: YesNoExpButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Yes No Buttons can be used as a selector for use in body boxes\
          where the task can be optional saving the users choice as the buttons\
          final state. However this button expands when the user fills in the Yes\
          or No option. This allows the engineer to add another portion of the\
          form for the user to fill out.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<YesNoExpButton>;

export const NoInput = {
  args:{
    isYesSelected: null,
    isDialogExpanded: null

  }
}

export const FollowUpYesNo = {
  args:{
    DynamicComponent:YesNoButtonsComponent
  }
}

export const SaveAndContinue = {
  args:{
    DynamicComponent:SaveContinueComponent

  }
}
