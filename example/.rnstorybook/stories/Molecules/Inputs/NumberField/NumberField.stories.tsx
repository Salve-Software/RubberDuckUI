import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import { NumberField } from 'rubber-duck-ui';

const RenderNumberField = (args: React.ComponentProps<typeof NumberField>) => {
  const [value, setValue] = useState(args.value ?? '');

  useEffect(() => {
    setValue(args.value ?? '');
  }, [args.value]);

  return <NumberField {...args} value={value} onChangeValue={setValue} />;
};

const meta = {
  title: 'Molecules/Inputs/NumberField',
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
  render: (args) => <RenderNumberField {...args} />,
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
