import type { Meta, StoryObj } from '@storybook/angular';
import { DEMO } from './DEMO-PopUpDialogueButton.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';

const meta: Meta<DEMO> = {
  title: 'DEMO-PopUpDialogueButtonComponent',
  component: DEMO,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'DEMO of pop up button functionality in a larger component.',
      },
    },
  },
  render: (args: DEMO) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
}


export default meta;
type Story = StoryObj<DEMO>;

// Exports story to storybook render
export const BaseModalWithPopupDialogue: Story = {
  args: {
    pageTitle: 'SET UP GUIDE',
    headerText: 'PopUpDialogueButton Demo',
    subtitleText: `This showcases how PopUpDialogueButton interacts with the larger base modal`,
    footerComponent: PrevNextButtonComponent,
    tabDrawerComponent: PrevNextButtonComponent,
  },
};

