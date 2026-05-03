import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { Switch } from 'rubber-duck-ui';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  args: {
    isOn: false,
    onPress: () => {},
  },
  argTypes: {
    isOn: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const On: Story = {
  args: {
    isOn: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    isOn: true,
    disabled: true,
  },
};

const InteractiveSwitch = (args: React.ComponentProps<typeof Switch>) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Switch
      {...args}
      isOn={isOn}
      onPress={() => setIsOn((prev) => !prev)}
    />
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveSwitch {...args} />,
};
