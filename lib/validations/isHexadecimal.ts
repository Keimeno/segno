// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

export const isHexadecimal = (str: string) => {
  assertString(str);
  return hexadecimal.test(str);
};
