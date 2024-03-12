import type { Meta, StoryObj } from '@storybook/angular';
import { DEMO } from './DEMO-YesNoExpButton.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';

const meta: Meta<DEMO> = {
  title: 'DEMO-YesNoExpButtonComponent',
  component: DEMO,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'DEMO of YesNoExpButton functionality in a larger component.',
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
export const BaseModalWithYesNoExpButton: Story = {
  args: {
    pageTitle: 'SET UP GUIDE',
    headerText: 'Yes No Expansion Demo',
    subtitleText: `This showcases how the yes no button interacts with the larger base modal.\
    It will render a new card when 'yes' is selected.`,
    footerComponent: PrevNextButtonComponent,
    tabDrawerComponent: PrevNextButtonComponent,
  },
};

