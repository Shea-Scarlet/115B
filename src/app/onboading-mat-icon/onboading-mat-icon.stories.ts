import { Meta, StoryObj } from "@storybook/angular";
import { OnboadingMatIconComponent } from "./onboading-mat-icon.component";


const meta: Meta<OnboadingMatIconComponent> = {
  title: 'Helper/Onboarding-Mat-Icon',
  tags: ['autodocs'],
  component: OnboadingMatIconComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'For DX. It allows to render a mat-icons with specified variant of sizes and colors.'
      },
    },
  },
}

export default meta;
type Story = StoryObj<OnboadingMatIconComponent>;

export const Default: Story = {
  args: {
    iconName: 'check_circle',
    size: 'md',
  }
}

export const Primary: Story = {
  args: {
    iconName: 'help',
    size: 'lg',
    color: 'black'
  }
}
