// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';

export const isLowercase = (str: string) => {
  assertString(str);
  return str === str.toLowerCase();
};
