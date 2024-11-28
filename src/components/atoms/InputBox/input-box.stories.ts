import { Meta, StoryObj } from '@storybook/angular';
import { InputBoxComponent } from './input-box.component';
import { fn } from '@storybook/test';

const meta: Meta<InputBoxComponent> = {
  title: 'Atom/InputBox',
  component: InputBoxComponent,
  tags: ['autodocs'],
  args: { // default values
    type: 'text',
    placeholder: 'Enter text here',
    required: false,
    disabled: false,
    label: 'Input Box',
    value: '',
    errorMessage: 'This field is required!',
    onInput(event) {
      fn()
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    isInvalid: { control: 'inline-radio', options:[true, false], if:{arg: 'required'} },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    errorMessage: { control: 'text', if:{arg: 'isInvalid'}},
    valueChange: { action: 'valueChange' }, // Logs value changes in Storybook
  },
};

export default meta;

type Story = StoryObj<InputBoxComponent>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your name',
  },
  // argTypes: {
  //   // foo is the property we want to remove from the UI
  //   required: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  // },
};

export const RequiredField: Story = {
  argTypes:{
    required: { control: 'boolean' },
  },
  args: {
    required: true,
    errorMessage: 'This field is required!',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const InvalidState: Story = {
  args: {
    value: '',
    required: true,
    isInvalid: true,
    errorMessage: 'Invalid input!',
  },
};
