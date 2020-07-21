import { assertString } from '../helpers/assertString.ts';

const octal = /^(0o)?[0-7]+$/i;

export const isOctal = (str: string) => {
  assertString(str);
  return octal.test(str);
};
