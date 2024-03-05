import { Meta, StoryObj } from '@storybook/angular';
import { BodyBoxComponent } from './body-box.component';

export default {
  title: 'BodyBox',
  tags: ['autodocs'],
  component: BodyBoxComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        // Add component description here:
        component:
          'BodyBox have the ability to contain any component and description elements allowing it to create\
          responsive layouts with ease. By default, it should render \'div\' element. Provides a shorthand way\
          to pass styles via props.'
      },
    },
  },
} as Meta;

export const Default: StoryObj<BodyBoxComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <app-body-box [padding]="padding" [bgColor]="bgColor" [display]="display" [flexDirection]="flexDirection" [justifyContent]="justifyContent">
        <app-body-box width="100px" height="100px" bgColor="green">Green Box</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="red">Red Box</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="blue">Blue Box</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="yellow">Yellow Box</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="orange">Orange Box</app-body-box>
        <app-body-box width="100px" height="100px" bgColor="purple">Purple Box</app-body-box>
      </app-body-box>
    `,
  }),
  args: {
    padding: '20px 40px',
    bgColor: '#F2F3F4',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
};

export const Primary: StoryObj<BodyBoxComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <app-body-box [bgColor]="bgColor" [maxWidth]="maxWidth" [padding]="padding">
        <app-body-box display="flex" flexDirection="column" padding="0px 0px 24px 0px" gap="24px">
          <app-body-box display="flex" justifyContent="space-between" alignItems="center">
            <app-body-box display="flex" flexDirection="column" alignItems="flex-start" gap="10px">
              <strong>(option1)</strong>
              <p>Choose and set up your sign in method</p>
            </app-body-box>
            <app-body-box display="flex" justifyContent="center" alignItems="center" gap="10px">
              <button mat-raised-button color="accent">Single Sign On</button>
              <button mat-raised-button color="accent">Multifactor Authentication</button>
            </app-body-box>
          </app-body-box>
          <app-body-box display="flex" justifyContent="space-between" alignItems="center">
            <app-body-box display="flex" flexDirection="column" alignItems="flex-start" gap="10px">
              <strong>(option2)</strong>
              <p>Choose and set up your sign in method</p>
            </app-body-box>
            <app-body-box display="flex" justifyContent="center" alignItems="center" gap="10px">
              <button mat-raised-button color="accent">Hello</button>
              <button mat-raised-button color="accent">Sunny day: Sun</button>
            </app-body-box>
          </app-body-box>
        </app-body-box>
      </app-body-box>
    `
  }),
  args: {
    bgColor: 'white',
    maxWidth: '872px',
    padding: '10px 24px',
  }
}

