import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomListModalApi } from 'rubber-duck-ui';
import { styles } from './BottomListModal.styles';

const Trigger = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.trigger} onPress={onPress}>
    <Text style={styles.triggerText}>{label}</Text>
  </TouchableOpacity>
);

const IconItemsDemo = () => (
  <View style={styles.container}>
    <Trigger
      label="Open — icon items"
      onPress={() =>
        BottomListModalApi.open({
          title: 'Options',
          items: [
            { id: '1', type: 'icon', title: 'Edit', iconName: 'Pencil', onPress: () => {} },
            { id: '2', type: 'icon', title: 'Duplicate', iconName: 'Copy', onPress: () => {} },
            { id: '3', type: 'icon', title: 'Share', iconName: 'Share2', onPress: () => {} },
            { id: '4', type: 'icon', title: 'Delete', iconName: 'Trash2', isDanger: true, onPress: () => {} },
          ],
        })
      }
    />
  </View>
);

const CheckboxItemsDemo = () => (
  <View style={styles.container}>
    <Trigger
      label="Open — checkbox items"
      onPress={() =>
        BottomListModalApi.open({
          title: 'Filters',
          items: [
            { id: '1', type: 'checkbox', title: 'Active', isChecked: true, onPress: () => {}, keepOpen: true },
            { id: '2', type: 'checkbox', title: 'Inactive', isChecked: false, onPress: () => {}, keepOpen: true },
            { id: '3', type: 'checkbox', title: 'Archived', isChecked: false, onPress: () => {}, keepOpen: true },
          ],
        })
      }
    />
  </View>
);

const RadioItemsDemo = () => (
  <View style={styles.container}>
    <Trigger
      label="Open — radio items"
      onPress={() =>
        BottomListModalApi.open({
          title: 'Sort by',
          items: [
            { id: '1', type: 'radio', title: 'Name', subTitle: 'A to Z', isChecked: true, onPress: () => {}, keepOpen: true },
            { id: '2', type: 'radio', title: 'Date', subTitle: 'Newest first', isChecked: false, onPress: () => {}, keepOpen: true },
            { id: '3', type: 'radio', title: 'Status', isChecked: false, onPress: () => {}, keepOpen: true },
          ],
        })
      }
    />
  </View>
);

const AvatarItemsDemo = () => (
  <View style={styles.container}>
    <Trigger
      label="Open — avatar items"
      onPress={() =>
        BottomListModalApi.open({
          title: 'Assign to',
          items: [
            {
              id: '1',
              type: 'avatar',
              title: 'Ana Lima',
              subTitle: 'Product Designer',
              avatarSource: { uri: 'https://i.pravatar.cc/150?img=1' },
              onPress: () => {},
            },
            {
              id: '2',
              type: 'avatar',
              title: 'Bruno Melo',
              subTitle: 'Engineer',
              avatarSource: { uri: 'https://i.pravatar.cc/150?img=2' },
              onPress: () => {},
            },
            {
              id: '3',
              type: 'avatar',
              title: 'Carla Souza',
              onPress: () => {},
            },
          ],
        })
      }
    />
  </View>
);

const meta = {
  title: 'Organisms/BottomListModal',
  component: View,
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconItems: Story = {
  render: () => <IconItemsDemo />,
};

export const CheckboxItems: Story = {
  render: () => <CheckboxItemsDemo />,
};

export const RadioItems: Story = {
  render: () => <RadioItemsDemo />,
};

export const AvatarItems: Story = {
  render: () => <AvatarItemsDemo />,
};
