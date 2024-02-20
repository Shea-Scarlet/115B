import type { Meta, StoryObj } from '@storybook/angular';

import { QuestionMarkAccordionButton } from './QuestionMarkAccordionButton';

const meta: Meta<QuestionMarkAccordionButton> = {
  title: 'QuestionMarkAccordionButton',
  component: QuestionMarkAccordionButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'The Question Mark Accordion Button is used to display helper messages, allowing it to\
          guide the users.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<QuestionMarkAccordionButton>;

// Exports story to storybook render
export const QuestionMarkAccordion: Story = {};
