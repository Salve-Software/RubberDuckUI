import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { NumberField } from 'rubber-duck-ui';

const meta = {
  title: 'Atoms/Inputs/NumberField',
  component: NumberField,
  args: {
    title: 'Quantity',
    value: '',
    placeholder: '0',
    rightLabel: undefined,
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    onChangeValue: () => {},
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    rightLabel: { control: 'text' },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof NumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithRightLabel: Story = {
  args: {
    title: 'Weight',
    rightLabel: 'kg',
  },
};

export const Required: Story = {
  args: {
    isRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    value: '42',
  },
};

const InteractiveNumberField = (
  args: React.ComponentProps<typeof NumberField>,
) => {
  const [value, setValue] = useState('');

  return <NumberField {...args} value={value} onChangeValue={setValue} />;
};

export const Interactive: Story = {
  render: (args) => <InteractiveNumberField {...args} />,
};
