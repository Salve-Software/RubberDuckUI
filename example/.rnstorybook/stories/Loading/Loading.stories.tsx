import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Loading, Text } from 'rubber-duck-ui';

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

const meta = {
  title: 'Atoms/Loading',
  component: Loading,
  args: {
    size: 'small_64',
    color: 'accent',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny_48', 'small_64', 'big_150'],
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
        'success',
        'error',
        'warning',
        'info',
      ],
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <View style={styles.container}>
      {(['tiny_48', 'small_64', 'big_150'] as const).map((size) => (
        <View
          key={size}
          style={styles.row}
        >
          <Loading size={size} />
          <Text size="sm">{size}</Text>
        </View>
      ))}
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={styles.container}>
      {(['accent', 'success', 'error', 'warning', 'info'] as const).map((color) => (
        <View
          key={color}
          style={styles.row}
        >
          <Loading
            size="small_64"
            color={color}
          />
          <Text
            size="sm"
            color={color}
          >
            {color}
          </Text>
        </View>
      ))}
    </View>
  ),
};
