import { assertString } from './assertString.ts';

export const toInt = (str: string, radix?: number) => {
  assertString(str);
  return parseInt(str, radix || 10);
};
