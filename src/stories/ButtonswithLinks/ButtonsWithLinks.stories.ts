import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonsWithLinksComponent } from './ButtonsWithLinks.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonsWithLinksComponent> = {
  title: 'Buttons with Links',
  component: ButtonsWithLinksComponent,
  tags: ['autodocs'],
  parameters: {
    docs:{
      description:{
        // Add component description here:
        component: "The buttons with links allow the users to navigate to online forms and resources"
      }
    }
  },
  render: (args: ButtonsWithLinksComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<ButtonsWithLinksComponent>;

export const Youtube: Story = {
  args: {
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    label: 'Youtube',
  },
};

export const linkedin: Story = {
  args: {
    link: 'https://www.linkedin.com/in/paden-portillo/',
    label: 'ultra cool guy',
  },
};
