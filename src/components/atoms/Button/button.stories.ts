import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atom/Button',
  component: ButtonComponent,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .storybook-button'],
    },
  },
  decorators: [withActions],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    primary: { 
      control: 'radio', 
      options: [true, false] 
    },
    size: { 
      control: 'select', 
      options: ['small','medium','large'], 
      defaultValue: 'medium',
    },
  },
  args: { onClick: fn() }, //actions
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    primary: true,
    label: 'PrimaryButton',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const LargeSecondaery: Story = {
  args: {...Large.args, ...Secondary.args},
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
