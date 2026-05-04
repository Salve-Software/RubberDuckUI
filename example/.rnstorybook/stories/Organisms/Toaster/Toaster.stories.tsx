import type { Meta, StoryObj } from '@storybook/react-native';
import type { IToasterApi } from 'rubber-duck-ui';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomModalApi, Toaster, ToasterApi } from 'rubber-duck-ui';
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
    </View>
  );
};

const ModalContent = () => {
  const toasterRef = useRef<IToasterApi>(null);

  return (
    <BottomSheetView style={styles.modalContent}>
      <Toaster ref={toasterRef} />
      <Trigger
        label="Show Success"
        onPress={() => toasterRef.current?.show({ type: 'success', title: 'Saved!', description: 'Action completed inside modal.' })}
      />
      <Trigger
        label="Show Error"
        onPress={() => toasterRef.current?.show({ type: 'error', title: 'Failed!', description: 'Something went wrong.' })}
      />
      <Trigger
        label="Show Warning"
        onPress={() => toasterRef.current?.show({ type: 'warning', title: 'Warning!', description: 'Please review your input.' })}
      />
      <Trigger
        label="Show Info"
        onPress={() => toasterRef.current?.show({ type: 'info', title: 'Info', description: 'Local toaster, not global.' })}
      />
    </BottomSheetView>
  );
};

const InsideModalDemo = () => (
  <View style={styles.container}>
    <Trigger
      label="Open modal with local Toaster"
      onPress={() => BottomModalApi.open({ content: <ModalContent /> })}
    />
  </View>
);

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

export const InsideModal: Story = {
  render: () => <InsideModalDemo />,
};
