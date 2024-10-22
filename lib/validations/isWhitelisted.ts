// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';

export const isWhitelisted = (str: string, chars: string[]) => {
  assertString(str);
  for (let i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
};
