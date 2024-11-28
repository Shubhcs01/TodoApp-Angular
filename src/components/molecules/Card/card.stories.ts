import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
import { Todo } from '../../../app/Todo';

const sampleTodo: Todo = {
  sno: 1,
  title: 'Sample Todo',
  desc: 'This is a sample description for the todo item.',
  active: true,
};

export default {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'], // Enables autodoc generation
  render: (args) => ({
    props: args,
  }),
  argTypes: {
    title: { control: 'text', description: 'The title of the card.' },
    description: { control: 'text', description: 'The description of the card.' },
    item: { control: 'object', description: 'The card object passed to the card.' },
    itemClicked: { action: 'itemClicked', description: 'Emitted when the delete button is clicked.' },
    buttonBgColor: {control: "color", description: 'The card Button background color.'},
    primary: {control: 'inline-radio', options: [true, false]},
    cardBgColor: {control: 'color', description: 'The card background color.'},
    cardBoxShadow: {control: 'inline-radio', options: [true, false], description: 'The card box shado flag.'},
    cardBorderColor: {control: 'color', description: 'The card border color.'},
  },
} as Meta<CardComponent>;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Default Title',
    description: 'This is a default description.',
    item: sampleTodo,
    primary: true,
    cardBoxShadow: false,
  },
};

// export const CustomTodo: Story = {
//   args: {
//     title: 'Custom Todo Title',
//     description: 'A custom description for this todo.',
//     item: {
//       sno: 2,
//       title: 'Custom Todo',
//       desc: 'This is a custom todo description.',
//       active: true,
//     },
//   },
// };

export const LongDescriptionCard: Story = {
  args: {
    title: 'Long Description Todo',
    description:
      'This todo has a much longer description to showcase how the component handles multi-line text and overflow scenarios. You can modify the CSS if needed.',
    item: {
      sno: 3,
      title: 'Long Todo',
      desc: 'This is a long todo description.',
      active: true,
    },
    primary: true,
    cardBoxShadow: false,
  },
};

export const ColoredCard: Story = {
  args: {
    title: "Default Title",
    description: "This is a default description.",

    item: {
      "sno": 1,
      "title": "Sample Todo",
      "desc": "This is a sample description for the todo item.",
      "active": true
    },

    primary: true,
    cardBoxShadow: true,
    cardBgColor: "#b2edf0",
    cardBorderColor: "#ffffff",
    buttonBgColor: "#d93b3b"
  }
};
