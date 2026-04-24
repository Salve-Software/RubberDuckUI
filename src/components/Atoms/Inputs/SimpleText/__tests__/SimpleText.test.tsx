import { render, screen, fireEvent } from '@testing-library/react-native';
import { SimpleText } from '../index';

const baseProps = {
  value: '',
  onChangeValue: jest.fn(),
};

describe('SimpleText', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Title', () => {
    it('Renders the title when provided', () => {
      render(<SimpleText {...baseProps} title="Full name" />);
      expect(screen.getByText('Full name')).toBeTruthy();
    });

    it('Does not render a title element when title is omitted', () => {
      render(<SimpleText {...baseProps} />);
      expect(screen.queryByText('Full name')).toBeNull();
    });
  });

  describe('TextInput', () => {
    it('Displays the current value', () => {
      render(<SimpleText {...baseProps} value="John" />);
      expect(screen.getByDisplayValue('John')).toBeTruthy();
    });

    it('Displays the placeholder when value is empty', () => {
      render(<SimpleText {...baseProps} placeholder="Type your name" />);
      expect(screen.getByPlaceholderText('Type your name')).toBeTruthy();
    });

    it('Calls onChangeValue when the user types', () => {
      const onChangeValue = jest.fn();
      render(<SimpleText {...baseProps} onChangeValue={onChangeValue} />);

      fireEvent.changeText(screen.getByTestId('simple-text-input'), 'Jane');

      expect(onChangeValue).toHaveBeenCalledWith('Jane');
    });

    it('Is not editable when isDisabled is true', () => {
      render(<SimpleText {...baseProps} isDisabled />);
      expect(screen.getByTestId('simple-text-input').props.editable).toBe(false);
    });

    it('Is editable when isDisabled is false', () => {
      render(<SimpleText {...baseProps} isDisabled={false} />);
      expect(screen.getByTestId('simple-text-input').props.editable).toBe(true);
    });

    it('Is readOnly when isReadOnly is true', () => {
      render(<SimpleText {...baseProps} isReadOnly />);
      expect(screen.getByTestId('simple-text-input').props.readOnly).toBe(true);
    });
  });

  describe('Required indicator', () => {
    it('Does not render the required icon when isRequired is false', () => {
      render(<SimpleText {...baseProps} title="Name" isRequired={false} />);
      expect(screen.queryByTestId('required-icon')).toBeNull();
    });
  });
});
