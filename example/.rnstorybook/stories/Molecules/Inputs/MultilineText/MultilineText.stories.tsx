import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import { MultilineText } from 'rubber-duck-ui';

const RenderMultilineText = (
  args: React.ComponentProps<typeof MultilineText>,
) => {
  const [value, setValue] = useState(args.value ?? '');

  useEffect(() => {
    setValue(args.value ?? '');
  }, [args.value]);

  return <MultilineText {...args} value={value} onChangeValue={setValue} />;
};

const meta = {
  title: 'Molecules/Inputs/MultilineText',
  component: MultilineText,
  args: {
    title: 'Description',
    value: '',
    placeholder: 'Write something…',
    numberOfLines: 4,
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    onChangeValue: () => {},
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    numberOfLines: { control: { type: 'number', min: 1, max: 20 } },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  render: (args) => <RenderMultilineText {...args} />,
} satisfies Meta<typeof MultilineText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    isRequired: true,
  },
};

export const LongBox: Story = {
  args: {
    numberOfLines: 8,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    value: 'Cannot edit this text',
  },
};

const InteractiveMultilineText = (
  args: React.ComponentProps<typeof MultilineText>,
) => {
  const [value, setValue] = useState('');

  return <MultilineText {...args} value={value} onChangeValue={setValue} />;
};

export const Interactive: Story = {
  render: (args) => <InteractiveMultilineText {...args} />,
};
