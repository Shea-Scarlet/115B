import { Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PopUpFormButtonComponent } from './PopUpFormButton.component';
import { BaseModalComponent } from '../Base Modal/BaseModal.component';
import { CardComponent } from '../Card/Card.component';

interface PopUpFormButtonProps {
  label: string;
  customComponent: any;
}

const meta: Meta = {
  title: 'Pop Up Form Buttons',
  component: PopUpFormButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({}),
  ],
  parameters: {
    docs: {
      description: {
        component: "The Pop Up Form buttons renders a pop up base modal when clicked.\
        The new base modal component and name of the component is passed as an \
        argument to the button. This sets the label for the button in the process.\
        The base modal that is passed as an argument could be the upload file\
        base modal, the pdf viewer base modal, etc. The newly rendered pop up form\
        will have a z-index of 100, displaying in front of all other rendred components."
      }
    }
  }
};

export default meta;

export const PopUpFormWithBaseModal = (args: PopUpFormButtonProps) => ({
  props: {
    ...args,
    label: "Base Modal",
    customComponent: BaseModalComponent
  },
});

PopUpFormWithBaseModal.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const PopUpFormWithCardComponent = (args: PopUpFormButtonProps) => ({
  props: {
    ...args,
    label: "Card",
    customComponent: CardComponent
  },
});

PopUpFormWithCardComponent.parameters = {
  controls: { hideNoControlsWarning: true },
};