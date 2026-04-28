import { render, screen, fireEvent } from '@testing-library/react-native';
import { RadioButton } from '../index';

describe('RadioButton', () => {
  describe('Title', () => {
    it('Renders the title when provided', () => {
      render(<RadioButton title="Newest first" />);
      expect(screen.getByText('Newest first')).toBeTruthy();
    });

    it('Does not render a title when omitted', () => {
      render(<RadioButton />);
      expect(screen.queryByText('Newest first')).toBeNull();
    });
  });

  describe('SubTitle', () => {
    it('Renders the subtitle when provided', () => {
      render(<RadioButton subTitle="Most recent items first" />);
      expect(screen.getByText('Most recent items first')).toBeTruthy();
    });
  });

  describe('Press behavior', () => {
    it('Calls onPress when pressed', () => {
      const onPress = jest.fn();
      render(<RadioButton title="Option A" onPress={onPress} />);

      fireEvent.press(screen.getByText('Option A'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Checked state', () => {
    it('Renders without crashing when isChecked is true', () => {
      const { toJSON } = render(<RadioButton isChecked />);
      expect(toJSON()).not.toBeNull();
    });

    it('Renders without crashing when isChecked is false', () => {
      const { toJSON } = render(<RadioButton isChecked={false} />);
      expect(toJSON()).not.toBeNull();
    });
  });
});
