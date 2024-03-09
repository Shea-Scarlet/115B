import type { Meta, StoryObj } from '@storybook/angular';
import { DEMO } from './DEMO-PopUpFormButton.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';

const meta: Meta<DEMO> = {
  title: 'DEMO-PopUpFormButtonComponent',
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
export const BaseModalWithPopupForm: Story = {
  args: {
    pageTitle: 'SET UP GUIDE',
    headerText: 'PopUpFormButton Demo',
    subtitleText: `This showcases how PopUpFormButton interacts within \
    the bodybox component and the larger base modal`,
    footerComponent: PrevNextButtonComponent,
    tabDrawerComponent: PrevNextButtonComponent,
  },
};

