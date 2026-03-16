import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'rubber-duck-ui';
import { styles } from './RadioButton.styles';

const meta = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
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
} satisfies Meta<typeof RadioButton>;

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

const InteractiveRadioButton = (
  args: React.ComponentProps<typeof RadioButton>,
) => {
  const [checked, setChecked] = useState(false);

  return (
    <RadioButton
      {...args}
      isChecked={checked}
      onPress={() => setChecked((prev) => !prev)}
    />
  );
};

export const Interactive: Story = {
  render: (args: React.ComponentProps<typeof RadioButton>) => <InteractiveRadioButton {...args} />,
};

const items = [
  { id: '1', title: 'Option one', subTitle: 'Description for option one' },
  { id: '2', title: 'Option two', subTitle: 'Description for option two' },
  { id: '3', title: 'Option three' },
];

const RadioButtonGroup = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <RadioButton
            title={item.title}
            subTitle={item.subTitle}
            isChecked={selected === item.id}
            onPress={() => setSelected(item.id)}
          />
        </View>
      ))}
    </View>
  );
};

export const Group: Story = {
  render: () => <RadioButtonGroup />,
};
