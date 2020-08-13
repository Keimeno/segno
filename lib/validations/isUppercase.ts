// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';

export const isUppercase = (str: string) => {
  assertString(str);
  return str === str.toUpperCase();
};
