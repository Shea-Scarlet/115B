import { Meta, StoryObj } from '@storybook/angular';
import { BodyBoxComponent } from './body-box.component';

const meta: Meta<BodyBoxComponent> = {
  title: 'Onboarding/Body-Box',
  tags: ['autodocs'],
  component: BodyBoxComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component: 'Button used for Tab Drawer',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BodyBoxComponent>;

export const Default: Story = {
  args: {
    title: 'Set up your account!',
    subtext: 'Choose and set up your sign in method.',
    isOptional: false,
    taskCompleted: true,
    hasBinaryButton: true,
    buttons: [{ label: 'Single Sign On' }, { label: 'Multifactor Authentication' }],
    dialogueText: 'Here you can put your helper message!!',
  },
};
