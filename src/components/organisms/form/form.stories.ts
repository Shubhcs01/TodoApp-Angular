import { Meta, StoryObj } from '@storybook/angular';
import { FormComponent } from './form.component';

export default {
  title: 'Organisms/Form',
  component: FormComponent,
  argTypes: {
    submitEvent: { action: 'submitted' }, // To track when form is submitted
  },
} as Meta;

const Template: StoryObj<FormComponent> = {
  render: (args) => ({
    component: FormComponent,
    props: args,
  }),
};

export const Default: StoryObj<FormComponent> = {
  ...Template,
  args: {
    title: 'Sample Todo',
    desc: 'This is a sample todo description',
  },
};

export const EmptyForm: StoryObj<FormComponent> = {
  ...Template,
  args: {
    title: '',
    desc: '',
  },
};

export const WithError: StoryObj<FormComponent> = {
  ...Template,
  args: {
    title: '', // Empty to trigger error message
    desc: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'This form is shown with empty fields to show validation errors.',
      },
    },
  },
};

export const FilledForm: StoryObj<FormComponent> = {
  ...Template,
  args: {
    title: 'Learn Storybook',
    desc: 'Understand how to use Storybook with Angular.',
  },
  parameters: {
    docs: {
      description: {
        story: 'This form is filled with pre-populated values.',
      },
    },
  },
};
