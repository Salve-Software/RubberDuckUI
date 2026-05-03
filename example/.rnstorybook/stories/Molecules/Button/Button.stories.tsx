import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'rubber-duck-ui';
import { styles } from './Button.styles';

const meta = {
  title: 'Molecules/Button',
  component: Button,
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    isLoading: false,
    onPress: () => {},
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    leftIcon: {
      control: 'select',
      options: [undefined, 'ArrowLeft', 'Plus', 'Check', 'Trash2'],
    },
    rightIcon: {
      control: 'select',
      options: [undefined, 'ArrowRight', 'Plus', 'Check', 'Trash2'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <View style={styles.container}>
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="outline" label="Outline" />
      <Button {...args} variant="ghost" label="Ghost" />
      <Button {...args} variant="destructive" label="Destructive" />
    </View>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <View style={styles.container}>
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </View>
  ),
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <View style={styles.container}>
      <Button {...args} leftIcon="ArrowLeft" label="Back" />
      <Button {...args} rightIcon="ArrowRight" label="Next" />
      <Button {...args} leftIcon="Plus" rightIcon="ArrowRight" label="Add item" />
    </View>
  ),
};

const InteractiveButton = (args: React.ComponentProps<typeof Button>) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      {...args}
      isLoading={loading}
      onPress={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    />
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveButton {...args} />,
};
