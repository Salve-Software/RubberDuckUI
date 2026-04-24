import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { MoneyField } from 'rubber-duck-ui';

const meta = {
  title: 'Atoms/Inputs/MoneyField',
  component: MoneyField,
  args: {
    title: 'Price',
    value: '',
    placeholder: '$ 0.00',
    currencySymbol: '$',
    decimalSeparator: '.',
    groupSeparator: ',',
    precision: 2,
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    onChangeValue: () => {},
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    currencySymbol: { control: 'text' },
    decimalSeparator: { control: 'text' },
    groupSeparator: { control: 'text' },
    precision: { control: { type: 'number', min: 0, max: 6 } },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof MoneyField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BRL: Story = {
  args: {
    title: 'Preço',
    currencySymbol: 'R$',
    decimalSeparator: ',',
    groupSeparator: '.',
    placeholder: 'R$ 0,00',
  },
};

export const EUR: Story = {
  args: {
    title: 'Prijs',
    currencySymbol: '€',
    decimalSeparator: ',',
    groupSeparator: '.',
    placeholder: '€ 0,00',
  },
};

export const NoDecimals: Story = {
  args: {
    title: 'JPY Amount',
    currencySymbol: '¥',
    precision: 0,
    placeholder: '¥ 0',
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
    value: '12345',
  },
};

const InteractiveMoneyField = (
  args: React.ComponentProps<typeof MoneyField>,
) => {
  const [value, setValue] = useState('');

  return <MoneyField {...args} value={value} onChangeValue={setValue} />;
};

export const Interactive: Story = {
  render: (args) => <InteractiveMoneyField {...args} />,
};
