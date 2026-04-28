import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'rubber-duck-ui';
import { styles } from './Icon.styles';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    icon: 'Home',
    size: 'medium_26',
    color: 'textPrimary',
  },
  argTypes: {
    icon: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: [
        'small_16',
        'tiny_20',
        'medium_26',
        'big_32',
        'large_40',
        'gigant_104',
      ],
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
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <View style={styles.container}>
      {(
        [
          'small_16',
          'tiny_20',
          'medium_26',
          'big_32',
          'large_40',
          'gigant_104',
        ] as const
      ).map((size) => (
        <View key={size} style={styles.row}>
          <Icon icon="Star" size={size} />
          <Text size="sm">{size}</Text>
        </View>
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
        <View key={color} style={styles.row}>
          <Icon icon="Circle" size="medium_26" color={color} />
          <Text size="sm" color={color}>
            {color}
          </Text>
        </View>
      ))}
    </View>
  ),
};
