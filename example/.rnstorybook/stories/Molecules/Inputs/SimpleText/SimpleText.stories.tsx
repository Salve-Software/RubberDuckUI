import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SimpleText } from 'rubber-duck-ui';
import { styles } from './SimpleText.styles';

const RenderSimpleText = (args: React.ComponentProps<typeof SimpleText>) => {
  const [value, setValue] = useState(args.value ?? '');

  useEffect(() => {
    setValue(args.value ?? '');
  }, [args.value]);

  return <SimpleText {...args} value={value} onChangeValue={setValue} />;
};

const meta = {
  title: 'Molecules/Inputs/SimpleText',
  component: SimpleText,
  args: {
    title: 'Name',
    value: '',
    placeholder: 'Type your name',
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    onChangeValue: () => {},
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  render: (args) => <RenderSimpleText {...args} />,
} satisfies Meta<typeof SimpleText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    isRequired: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    value: 'Cannot edit this',
  },
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    value: 'Read only value',
  },
};

const InteractiveSimpleText = (args: React.ComponentProps<typeof SimpleText>) => {
  const [value, setValue] = useState('');

  return <SimpleText {...args} value={value} onChangeValue={setValue} />;
};

export const Interactive: Story = {
  render: (args) => <InteractiveSimpleText {...args} />,
};

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <SimpleText
        title="Name"
        placeholder="Full name"
        value={name}
        onChangeValue={setName}
        isRequired
      />
      <SimpleText
        title="Email"
        placeholder="you@example.com"
        value={email}
        onChangeValue={setEmail}
        isRequired
      />
    </View>
  );
};

export const Form_: Story = {
  name: 'Form',
  render: () => <Form />,
};

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  return (
    <SimpleText
      title="Password"
      placeholder="Type your password"
      value={password}
      onChangeValue={setPassword}
      isRequired
      secureTextEntry={isSecure}
      autoCapitalize="none"
      rightIcon={{
        icon: isSecure ? 'EyeOff' : 'Eye',
        onPress: () => setIsSecure((prev) => !prev),
      }}
    />
  );
};

export const Password: Story = {
  render: () => <PasswordField />,
};
