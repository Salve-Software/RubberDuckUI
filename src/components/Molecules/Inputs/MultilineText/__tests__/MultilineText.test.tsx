import { render, screen, fireEvent } from '@testing-library/react-native';
import { MultilineText } from '../index';

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('MultilineText', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Title', () => {
    it('Renders the title when provided', () => {
      render(<MultilineText {...baseProps} title="Description" />);
      expect(screen.getByText('Description')).toBeTruthy();
    });

    it('Does not render a title when omitted', () => {
      render(<MultilineText {...baseProps} />);
      expect(screen.queryByText('Description')).toBeNull();
    });
  });

  describe('TextInput', () => {
    it('Displays the current value', () => {
      render(<MultilineText {...baseProps} value="Hello" />);
      expect(screen.getByDisplayValue('Hello')).toBeTruthy();
    });

    it('Displays the placeholder when value is empty', () => {
      render(<MultilineText {...baseProps} placeholder="Enter description" />);
      expect(screen.getByPlaceholderText('Enter description')).toBeTruthy();
    });

    it('Calls onChangeValue when the user types', () => {
      const onChangeValue = jest.fn();
      render(<MultilineText {...baseProps} onChangeValue={onChangeValue} />);

      fireEvent.changeText(
        screen.getByTestId('multiline-text-input'),
        'New text',
      );

      expect(onChangeValue).toHaveBeenCalledWith('New text');
    });

    it('Is not editable when isDisabled is true', () => {
      render(<MultilineText {...baseProps} isDisabled />);
      expect(
        screen.getByTestId('multiline-text-input').props.editable,
      ).toBe(false);
    });

    it('Is editable when isDisabled is false', () => {
      render(<MultilineText {...baseProps} isDisabled={false} />);
      expect(
        screen.getByTestId('multiline-text-input').props.editable,
      ).toBe(true);
    });

    it('Is readOnly when isReadOnly is true', () => {
      render(<MultilineText {...baseProps} isReadOnly />);
      expect(
        screen.getByTestId('multiline-text-input').props.readOnly,
      ).toBe(true);
    });
  });

  describe('Required indicator', () => {
    it('Does not render the required icon when isRequired is false', () => {
      render(<MultilineText {...baseProps} title="Notes" isRequired={false} />);
      expect(screen.queryByTestId('required-icon')).toBeNull();
    });
  });
});
