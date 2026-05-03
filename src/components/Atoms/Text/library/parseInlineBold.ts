export function parseInlineBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((segment, index) => {
    const match = segment.match(/^\*\*(.+)\*\*$/);
    if (match) {
      return { text: match[1], bold: true, key: index };
    }
    return { text: segment, bold: false, key: index };
  });
}
