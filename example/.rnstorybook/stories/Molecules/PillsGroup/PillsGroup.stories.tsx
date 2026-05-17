import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { PillsGroup } from 'rubber-duck-ui';

const pills = [
  { id: '1', title: 'Todos' },
  { id: '2', title: 'Pendentes' },
  { id: '3', title: 'Aprovados' },
  { id: '4', title: 'Recusados' },
];

const meta = {
  title: 'Molecules/PillsGroup',
  component: PillsGroup,
  args: {
    pills,
    idSelected: '1',
    onPress: () => {},
  },
} satisfies Meta<typeof PillsGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoneSelected: Story = {
  args: {
    idSelected: '',
  },
};

const ManyPills = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `Opção ${i + 1}`,
}));

export const Scrollable: Story = {
  args: {
    pills: ManyPills,
    idSelected: '1',
  },
};

export const ScrollableLastSelected: Story = {
  args: {
    pills: ManyPills,
    idSelected: String(ManyPills.length),
  },
};

const InteractivePillsGroup = (
  args: React.ComponentProps<typeof PillsGroup>,
) => {
  const [selected, setSelected] = useState(args.idSelected);

  return (
    <PillsGroup
      {...args}
      idSelected={selected}
      onPress={setSelected}
    />
  );
};

export const Interactive: Story = {
  render: (args) => <InteractivePillsGroup {...args} />,
};
