// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';

/**
 * @ignore
 */
const md5 = /^[a-f0-9]{32}$/;

export const isMD5 = (str: string) => {
  assertString(str);
  return md5.test(str);
};
