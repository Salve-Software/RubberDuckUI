import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Text } from 'rubber-duck-ui';
import { styles } from './Text.styles';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    color: 'textPrimary',
    size: 'md',
    weight: 'regular',
    align: 'left',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [
        'accent',
        'accentLight',
        'accentDark',
        'accentMuted',
        'textPrimary',
        'textSecondary',
        'textDisabled',
        'textInverse',
        'success',
        'error',
        'warning',
        'info',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'display'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    numberOfLines: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <View style={styles.container}>
      {(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'display'] as const).map(
        (size) => (
          <Text
            key={size}
            size={size}
          >
            {size} — The quick brown fox
          </Text>
        ),
      )}
    </View>
  ),
};

export const Weights: Story = {
  render: () => (
    <View style={styles.container}>
      {(['regular', 'medium', 'semibold', 'bold'] as const).map((weight) => (
        <Text
          key={weight}
          weight={weight}
        >
          {weight} — The quick brown fox
        </Text>
      ))}
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={styles.container}>
      {(
        [
          'textPrimary',
          'textSecondary',
          'textDisabled',
          'accent',
          'success',
          'error',
          'warning',
          'info',
        ] as const
      ).map((color) => (
        <Text
          key={color}
          color={color}
        >
          {color} — The quick brown fox
        </Text>
      ))}
    </View>
  ),
};

export const Align: Story = {
  render: () => (
    <View style={styles.container}>
      {(['left', 'center', 'right'] as const).map((align) => (
        <Text
          key={align}
          align={align}
        >
          {align} — The quick brown fox jumps over the lazy dog
        </Text>
      ))}
    </View>
  ),
};

export const Truncated: Story = {
  args: {
    numberOfLines: 1,
    children:
      'This is a very long text that should be truncated after one line because numberOfLines is set to 1',
  },
};
