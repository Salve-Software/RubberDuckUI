import type { AvatarSize } from '../../types';
import { buildSize } from '../buildSize';

describe('Avatar/buildSize', () => {
  it('Returns size 32 for small_32', () => {
    const result = buildSize('small_32' as AvatarSize);
    expect(result).toBe(32);
  });

  it('Returns size 40 for medium_40', () => {
    const result = buildSize('medium_40' as AvatarSize);
    expect(result).toBe(40);
  });

  it('Returns size 48 for big_48', () => {
    const result = buildSize('big_48' as AvatarSize);
    expect(result).toBe(48);
  });

  it('Returns size 68 for gigant_68', () => {
    const result = buildSize('gigant_68' as AvatarSize);
    expect(result).toBe(68);
  });
});
