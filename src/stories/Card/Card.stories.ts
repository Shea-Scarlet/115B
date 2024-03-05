import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './Card.component';
import { PrevNextButtonComponent } from '../Previous and Next Buttons/PrevNextButton.component';

const meta: Meta<CardComponent> = {
  title: 'Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    explanation: { control: 'text' }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'Cards have the ability to contain a custom title and description elements allowing it to\
          act as a full more informed button or take on more elements like a logo as well as some other\
          data fields for the user to see as well as a user-interactable checkbox for more of a check-list use',
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

// Exports story to storybook render
export const CardWithAllElements: Story = {
  args: {
    title: 'Default Title!',
    explanation: "I've explained this well!",
    dataField1: "Woah some data!",
    dataField2: "Woah more data!",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    infoComponent: PrevNextButtonComponent,
    checkboxComponent: PrevNextButtonComponent,
  },
};

export const PhotoAndTitle: Story = {
  args: {
    title: 'Default Title!',
    explanation: "I've explained this well!",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  },
};

export const TitleDataAndCheckbox: Story = {
  args: {
    title: 'Default Title!',
    explanation: "I've explained this well!",
    dataField1: "Woah some data!",
    dataField2: "Woah more data!",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    checkboxComponent: PrevNextButtonComponent,
  },
};

export const TitleDataAndInfo: Story = {
  args: {
    title: 'Default Title!',
    explanation: "I've explained this well!",
    dataField1: "Woah some data!",
    dataField2: "Woah more data!",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    infoComponent: PrevNextButtonComponent,
  },
};
