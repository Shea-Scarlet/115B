import type { Meta, StoryObj } from '@storybook/angular';

import { BaseModalComponent } from './BaseModal.component';

import { CardComponent } from '../Card/Card.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';
import { TabsComponent } from '../../app/tabs/tabs.component';
import { TabDrawerButtonComponent } from '../../app/tab-drawer-button/tab-drawer-button.component';
import { BodyBoxComponent } from '../../app/body-box/body-box.component';


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
export const initialModalWithPopUpDialogue: Story = {
  args: {
    pageTitle: 'SET UP GUIDE',
    headerText: 'Welcome Disney!',
    subtitleText: `This guide will take you through the steps neccesary to succesfully onboard to the brinqa platform!`,
    footerComponent: PrevNextButtonComponent,
    tabDrawerComponent: PrevNextButtonComponent,
  },
};