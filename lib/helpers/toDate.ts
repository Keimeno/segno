import { assertString } from './assertString.ts';

export const toDate = (str: string) => {
  assertString(str);
  const date = Date.parse(str);
  return !isNaN(date) ? new Date(date) : null;
};
