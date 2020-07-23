// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

const base32 = /^[A-Z2-7]+=*$/;

export const isBase32 = (str: string) => {
  assertString(str);

  const len = str.length;
  if (len > 0 && len % 8 === 0 && base32.test(str)) {
    return true;
  }
  return false;
};
