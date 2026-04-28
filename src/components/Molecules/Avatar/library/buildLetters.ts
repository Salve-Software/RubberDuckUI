export const buildLetters = (title: string): string => {
  const text = title.trim().split(/\s+/);

  const firstLetter = text?.[0]?.[0];

  if (!firstLetter) {
    return '';
  }

  const secondLetter = text.length > 1 ? text?.[1]?.[0] : '';

  return `${firstLetter}${secondLetter}`;
};
