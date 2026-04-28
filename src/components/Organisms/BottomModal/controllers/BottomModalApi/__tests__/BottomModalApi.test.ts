import { BottomModalApi } from '../index';

const makeRef = (overrides: Partial<{ open: jest.Mock; dismiss: jest.Mock }> = {}) => ({
  current: {
    open: jest.fn(),
    dismiss: jest.fn(),
    ...overrides,
  },
});

describe('BottomModalApi', () => {
  afterEach(() => {
    BottomModalApi.setRef({ current: null });
    jest.clearAllMocks();
  });

  describe('open', () => {
    it('Does not throw when no ref has been set', () => {
      expect(() =>
        BottomModalApi.open({ content: null }),
      ).not.toThrow();
    });

    it('Does not throw when ref.current is null', () => {
      BottomModalApi.setRef({ current: null });
      expect(() =>
        BottomModalApi.open({ content: null }),
      ).not.toThrow();
    });

    it('Calls ref.current.open with the provided props', () => {
      const ref = makeRef();
      BottomModalApi.setRef(ref);

      const props = { content: null };
      BottomModalApi.open(props);

      expect(ref.current.open).toHaveBeenCalledTimes(1);
      expect(ref.current.open).toHaveBeenCalledWith(props);
    });
  });

  describe('dismiss', () => {
    it('Does not throw when no ref has been set', () => {
      expect(() => BottomModalApi.dismiss()).not.toThrow();
    });

    it('Does not throw when ref.current is null', () => {
      BottomModalApi.setRef({ current: null });
      expect(() => BottomModalApi.dismiss()).not.toThrow();
    });

    it('Calls ref.current.dismiss', () => {
      const ref = makeRef();
      BottomModalApi.setRef(ref);

      BottomModalApi.dismiss();

      expect(ref.current.dismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('setRef', () => {
    it('Replaces the previous ref', () => {
      const first = makeRef();
      const second = makeRef();

      BottomModalApi.setRef(first);
      BottomModalApi.setRef(second);
      BottomModalApi.dismiss();

      expect(first.current.dismiss).not.toHaveBeenCalled();
      expect(second.current.dismiss).toHaveBeenCalledTimes(1);
    });
  });
});
