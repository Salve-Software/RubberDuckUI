import type { IconSize } from '../../types';
import { buildSize } from '../buildSize';

describe('Icon/buildSize', () => {
  it('Returns size 20 for tiny_20', () => {
    const result = buildSize('tiny_20' as IconSize);
    expect(result).toBe(20);
  });

  it('Returns size 26 for medium_26', () => {
    const result = buildSize('medium_26' as IconSize);
    expect(result).toBe(26);
  });

  it('Returns size 32 for big_32', () => {
    const result = buildSize('big_32' as IconSize);
    expect(result).toBe(32);
  });

  it('Returns size 40 for large_40', () => {
    const result = buildSize('large_40' as IconSize);
    expect(result).toBe(40);
  });

  it('Returns size 104 for gigant_104', () => {
    const result = buildSize('gigant_104' as IconSize);
    expect(result).toBe(104);
  });

  it('Returns size 20 as default when no size is provided', () => {
    const result = buildSize();
    expect(result).toBe(20);
  });
});
