import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // disableSaveFromUI: true, // Disable save from UI
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 custom
        { name: 'Maroon', value: '#400' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },
  },
};

export default preview;
