import { assertString } from './assertString.ts';
import { blacklist } from './blacklist.ts';

export const stripLow = (str: string, keepNewLines?: boolean) => {
  assertString(str);
  const chars = keepNewLines
    ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F'
    : '\\x00-\\x1F\\x7F';
  return blacklist(str, chars);
};
