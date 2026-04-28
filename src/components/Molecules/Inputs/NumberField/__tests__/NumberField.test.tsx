import { render, screen, fireEvent } from '@testing-library/react-native';
import { NumberField } from '../index';

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('NumberField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Title', () => {
    it('Renders the title when provided', () => {
      render(<NumberField {...baseProps} title="Age" />);
      expect(screen.getByText('Age')).toBeTruthy();
    });

    it('Does not render a title when omitted', () => {
      render(<NumberField {...baseProps} />);
      expect(screen.queryByText('Age')).toBeNull();
    });
  });

  describe('TextInput', () => {
    it('Displays the current value', () => {
      render(<NumberField {...baseProps} value="42" />);
      expect(screen.getByDisplayValue('42')).toBeTruthy();
    });

    it('Displays the placeholder when value is empty', () => {
      render(<NumberField {...baseProps} placeholder="Enter a number" />);
      expect(screen.getByPlaceholderText('Enter a number')).toBeTruthy();
    });

    it('Calls onChangeValue with digits only when the user types', () => {
      const onChangeValue = jest.fn();
      render(<NumberField {...baseProps} onChangeValue={onChangeValue} />);

      fireEvent.changeText(screen.getByTestId('number-field-input'), '12abc');

      expect(onChangeValue).toHaveBeenCalledWith('12');
    });

    it('Is not editable when isDisabled is true', () => {
      render(<NumberField {...baseProps} isDisabled />);
      expect(
        screen.getByTestId('number-field-input').props.editable,
      ).toBe(false);
    });

    it('Is editable when isDisabled is false', () => {
      render(<NumberField {...baseProps} isDisabled={false} />);
      expect(
        screen.getByTestId('number-field-input').props.editable,
      ).toBe(true);
    });

    it('Is readOnly when isReadOnly is true', () => {
      render(<NumberField {...baseProps} isReadOnly />);
      expect(
        screen.getByTestId('number-field-input').props.readOnly,
      ).toBe(true);
    });
  });

  describe('Right label', () => {
    it('Renders the right label when provided', () => {
      render(<NumberField {...baseProps} rightLabel="kg" />);
      expect(screen.getByText('kg')).toBeTruthy();
    });

    it('Does not render a right label when omitted', () => {
      render(<NumberField {...baseProps} />);
      expect(screen.queryByText('kg')).toBeNull();
    });
  });

  describe('Required indicator', () => {
    it('Does not render the required icon when isRequired is false', () => {
      render(<NumberField {...baseProps} title="Age" isRequired={false} />);
      expect(screen.queryByTestId('required-icon')).toBeNull();
    });
  });
});
