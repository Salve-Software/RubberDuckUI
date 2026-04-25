import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'rubber-duck-ui';
import { styles } from './Avatar.styles';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    size: 'small_32',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny_24', 'small_32', 'medium_40', 'big_48', 'gigant_68'],
    },
    borderColor: {
      control: 'select',
      options: [
        'accent',
        'borderSubtle',
        'borderDefault',
        'borderStrong',
        'success',
        'error',
        'warning',
        'info',
      ],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    source: { uri: 'https://i.pravatar.cc/150?img=1' },
  },
};

export const WithLetters: Story = {
  args: {
    title: 'John Doe',
  },
};

export const WithBorder: Story = {
  args: {
    source: { uri: 'https://i.pravatar.cc/150?img=2' },
    borderColor: 'accent',
  },
};

export const FallbackOnError: Story = {
  args: {
    source: { uri: 'https://broken-url.xyz/avatar.png' },
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={styles.container}>
      {(['tiny_24', 'small_32', 'medium_40', 'big_48', 'gigant_68'] as const).map((size) => (
        <View key={size} style={styles.row}>
          <Avatar size={size} source={{ uri: 'https://i.pravatar.cc/150?img=3' }} />
          <Text size="sm">{size}</Text>
        </View>
      ))}
    </View>
  ),
};

export const WithLettersSizes: Story = {
  render: () => (
    <View style={styles.container}>
      {(['tiny_24', 'small_32', 'medium_40', 'big_48', 'gigant_68'] as const).map((size) => (
        <View key={size} style={styles.row}>
          <Avatar size={size} title="John Doe" />
          <Text size="sm">{size}</Text>
        </View>
      ))}
    </View>
  ),
};
