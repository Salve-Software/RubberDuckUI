import type { Preview } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import React from 'react';
import { RubberDuckUIProvider } from 'rubber-duck-ui';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story) => (
      <RubberDuckUIProvider>
        <Story />
      </RubberDuckUIProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
