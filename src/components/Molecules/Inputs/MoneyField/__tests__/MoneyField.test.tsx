import { render, screen, fireEvent } from '@testing-library/react-native';
import { MoneyField } from '../index';

jest.mock('react-native-mask-input', () => {
  const React = require('react');
  const { TextInput } = require('react-native');
  return {
    __esModule: true,
    default: ({ onChangeText, ...props }: any) =>
      React.createElement(TextInput, {
        ...props,
        onChangeText: (text: string) => onChangeText?.(text, text),
      }),
    createNumberMask: ({ prefix }: { prefix?: string[] } = {}) => [...(prefix ?? [])],
  };
});

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('MoneyField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Title', () => {
    it('Renders the title when provided', () => {
      render(<MoneyField {...baseProps} title="Amount" />);
      expect(screen.getByText('Amount')).toBeTruthy();
    });

    it('Does not render a title when omitted', () => {
      render(<MoneyField {...baseProps} />);
      expect(screen.queryByText('Amount')).toBeNull();
    });
  });

  describe('MaskInput', () => {
    it('Displays the current value', () => {
      render(<MoneyField {...baseProps} value="100" />);
      expect(screen.getByDisplayValue('100')).toBeTruthy();
    });

    it('Displays the placeholder when value is empty', () => {
      render(<MoneyField {...baseProps} placeholder="0.00" />);
      expect(screen.getByPlaceholderText('0.00')).toBeTruthy();
    });

    it('Calls onChangeValue when the user types', () => {
      const onChangeValue = jest.fn();
      render(<MoneyField {...baseProps} onChangeValue={onChangeValue} />);

      fireEvent.changeText(screen.getByTestId('money-field-input'), '50');

      expect(onChangeValue).toHaveBeenCalledWith('50');
    });

    it('Is not editable when isDisabled is true', () => {
      render(<MoneyField {...baseProps} isDisabled />);
      expect(
        screen.getByTestId('money-field-input').props.editable,
      ).toBe(false);
    });

    it('Is editable when isDisabled is false', () => {
      render(<MoneyField {...baseProps} isDisabled={false} />);
      expect(
        screen.getByTestId('money-field-input').props.editable,
      ).toBe(true);
    });

    it('Is readOnly when isReadOnly is true', () => {
      render(<MoneyField {...baseProps} isReadOnly />);
      expect(
        screen.getByTestId('money-field-input').props.readOnly,
      ).toBe(true);
    });
  });

  describe('Required indicator', () => {
    it('Does not render the required icon when isRequired is false', () => {
      render(<MoneyField {...baseProps} title="Amount" isRequired={false} />);
      expect(screen.queryByTestId('required-icon')).toBeNull();
    });
  });
});
