import type { Meta, StoryObj } from '@storybook/angular';

import { DEMOPopupComponent } from './DEMOPopup.component';

import { CardComponent } from '../Card/Card.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';
import { TabsComponent } from '../../app/tabs/tabs.component';
import { TabDrawerButtonComponent } from '../../app/tab-drawer-button/tab-drawer-button.component';
import { BodyBoxComponent } from '../../app/body-box/body-box.component';


const meta: Meta<DEMOPopupComponent> = {
  title: 'DEMO-Popup',
  component: DEMOPopupComponent,
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
  render: (args: DEMOPopupComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
}


export default meta;
type Story = StoryObj<DEMOPopupComponent>;

// Exports story to storybook render
export const DEMOPopup: Story = {
  
};