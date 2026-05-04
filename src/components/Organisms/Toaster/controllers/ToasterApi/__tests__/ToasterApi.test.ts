import { ToasterApi } from '../index';

const makeRef = (overrides: Partial<{ show: jest.Mock; hide: jest.Mock }> = {}) => ({
  current: {
    show: jest.fn(),
    hide: jest.fn(),
    ...overrides,
  },
});

describe('ToasterApi', () => {
  afterEach(() => {
    ToasterApi.setRef({ current: null });
    jest.clearAllMocks();
  });

  describe('show', () => {
    it('Does not throw when no ref has been set', () => {
      expect(() =>
        ToasterApi.show({ type: 'success', title: 'Test' }),
      ).not.toThrow();
    });

    it('Does not throw when ref.current is null', () => {
      ToasterApi.setRef({ current: null });
      expect(() =>
        ToasterApi.show({ type: 'success', title: 'Test' }),
      ).not.toThrow();
    });

    it('Calls ref.current.show with the provided props', () => {
      const ref = makeRef();
      ToasterApi.setRef(ref);

      const props = { type: 'success' as const, title: 'Hello' };
      ToasterApi.show(props);

      expect(ref.current.show).toHaveBeenCalledTimes(1);
      expect(ref.current.show).toHaveBeenCalledWith(props);
    });
  });

  describe('hide', () => {
    it('Does not throw when no ref has been set', () => {
      expect(() => ToasterApi.hide()).not.toThrow();
    });

    it('Does not throw when ref.current is null', () => {
      ToasterApi.setRef({ current: null });
      expect(() => ToasterApi.hide()).not.toThrow();
    });

    it('Calls ref.current.hide', () => {
      const ref = makeRef();
      ToasterApi.setRef(ref);

      ToasterApi.hide();

      expect(ref.current.hide).toHaveBeenCalledTimes(1);
    });
  });

  describe('setRef', () => {
    it('Replaces the previous ref', () => {
      const first = makeRef();
      const second = makeRef();

      ToasterApi.setRef(first);
      ToasterApi.setRef(second);
      ToasterApi.hide();

      expect(first.current.hide).not.toHaveBeenCalled();
      expect(second.current.hide).toHaveBeenCalledTimes(1);
    });
  });
});
