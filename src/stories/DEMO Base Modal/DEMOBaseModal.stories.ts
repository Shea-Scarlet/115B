import type { Meta, StoryObj } from '@storybook/angular';

import { DEMOBaseModalComponent } from './DEMOBaseModal.component';

import { CardComponent } from '../Card/Card.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';
import { TabsComponent } from '../../app/tabs/tabs.component';
import { TabDrawerButtonComponent } from '../../app/tab-drawer-button/tab-drawer-button.component';
import { BodyBoxComponent } from '../../app/body-box/body-box.component';


const meta: Meta<DEMOBaseModalComponent> = {
  title: 'DEMO-Base Modal',
  component: DEMOBaseModalComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'This is the demo component for intended functionality.',
      },
    },
  },
  render: (args: DEMOBaseModalComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
}


export default meta;
type Story = StoryObj<DEMOBaseModalComponent>;

// Exports story to storybook render
export const DEMOMODAL: Story = {
  
};