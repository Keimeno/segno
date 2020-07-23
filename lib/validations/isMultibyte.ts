// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

const multibyte = /[^\x00-\x7F]/;

export const isMultibyte = (str: string) => {
  assertString(str);
  return multibyte.test(str);
};
