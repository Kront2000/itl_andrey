export const cleanText = (html: string | undefined) => {
    if (html == undefined) {
        return '';
    }
    return html.replace(/<[^>]*>/g, '').trim();
};

export const cleanTextWithLineBreaks = (html: string| undefined) => {
  if (!html) return '';
  return html
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .trim();
}