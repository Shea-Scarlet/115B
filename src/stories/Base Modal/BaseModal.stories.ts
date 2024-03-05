import type { Meta, StoryObj } from '@storybook/angular';

import { BaseModalComponent } from './BaseModal.component';

import { CardComponent } from '../Card/Card.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';


const meta: Meta<BaseModalComponent> = {
  title: 'Base Modal',
  component: BaseModalComponent,
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
  render: (args: BaseModalComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
}


export default meta;
type Story = StoryObj<BaseModalComponent>;

// Exports story to storybook render
export const initialModalWithTabs: Story = {
  args: {
    pageTitle: 'SET UP GUIDE',
    headerText: 'Welcome Disney!',
    subtitleText: `This guide will take you through the steps neccesary to succesfully onboard to the brinqa platform!`,
    footerComponent: PrevNextButtonComponent,
    tabDrawerComponent: PrevNextButtonComponent,
  },
};

export const PopupModalWithCard: Story = {
  args: {
    pageTitle: 'Specific pop-up text',
    headerText: 'This is a pop up!',
    subtitleText: `This is the default explanation text, you can put whatever you want here and it should match the tab page or default!`,
    bodyComponent: CardComponent,
    footerComponent: PrevNextButtonComponent,
  },
};
