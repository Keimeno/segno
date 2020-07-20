import { assertString } from '../helpers/assertString.ts';

export const isBoolean = (str: string) => {
  assertString(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
};
