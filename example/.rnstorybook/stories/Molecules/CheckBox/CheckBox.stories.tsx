import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'rubber-duck-ui';
import { styles } from './CheckBox.styles';

const meta = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  args: {
    title: 'Label',
    subTitle: 'Sublabel',
    isChecked: false,
    onPress: () => {},
  },
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'text' },
    isChecked: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    title: undefined,
    subTitle: undefined,
  },
};

const InteractiveCheckBox = (args: React.ComponentProps<typeof CheckBox>) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      {...args}
      isChecked={checked}
      onPress={() => setChecked((prev) => !prev)}
    />
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveCheckBox {...args} />,
};

const items = [
  { id: '1', title: 'Option one', subTitle: 'Description for option one' },
  { id: '2', title: 'Option two', subTitle: 'Description for option two' },
  { id: '3', title: 'Option three' },
];

const CheckBoxList = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <CheckBox
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          isChecked={!!checked[item.id]}
          onPress={() =>
            setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
          }
        />
      ))}
    </View>
  );
};

export const List: Story = {
  render: () => <CheckBoxList />,
};
