import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Toaster, ToasterApi } from 'rubber-duck-ui';
import { styles } from './Toaster.styles';

const Trigger = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.trigger} onPress={onPress}>
    <Text style={styles.triggerText}>{label}</Text>
  </TouchableOpacity>
);

const DefaultDemo = () => (
  <View style={styles.container}>
    <Trigger
      label="Show Success"
      onPress={() =>
        ToasterApi.show({
          type: 'success',
          title: 'Success!',
          description: 'Your action was completed.',
        })
      }
    />
    <Trigger
      label="Show Error"
      onPress={() =>
        ToasterApi.show({
          type: 'error',
          title: 'Error!',
          description: 'Something went wrong.',
        })
      }
    />
    <Trigger
      label="Show Warning"
      onPress={() =>
        ToasterApi.show({
          type: 'warning',
          title: 'Warning!',
          description: 'Please check your input.',
        })
      }
    />
    <Trigger
      label="Show Info"
      onPress={() =>
        ToasterApi.show({
          type: 'info',
          title: 'Info',
          description: 'Here is some information.',
        })
      }
    />
    <Toaster />
  </View>
);

type ToasterType = 'success' | 'error' | 'warning' | 'info';

const TYPES: ToasterType[] = ['success', 'error', 'warning', 'info'];

const InteractiveDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    const type = TYPES[currentIndex % TYPES.length];
    ToasterApi.show({
      type,
      title: `${type.charAt(0).toUpperCase()}${type.slice(1)} toast`,
      description: `This is a ${type} notification.`,
    });
    setCurrentIndex((prev) => (prev + 1) % TYPES.length);
  };

  return (
    <View style={styles.container}>
      <Trigger label="Cycle through types" onPress={showNext} />
      <Toaster />
    </View>
  );
};

const meta = {
  title: 'Organisms/Toaster',
  component: View,
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DefaultDemo />,
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
