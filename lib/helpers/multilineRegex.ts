/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {object} - RegExp object
 */
export const multilineRegexp = (parts: string[], flags = '') => {
  const regexpAsStringLiteral = parts.join('');

  return new RegExp(regexpAsStringLiteral, flags);
};
