// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

/**
 * @ignore
 */
const ascii = /^[\x00-\x7F]+$/;

export const isAscii = (str: string) => {
  assertString(str);
  return ascii.test(str);
};
