import { assertString } from './assertString.ts';

export const matches = (str: string, pattern: RegExp, modifiers: string) => {
  assertString(str);

  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }

  return pattern.test(str);
};
