// @ts-ignore
import { assertString } from '../helpers/assertString.ts';
// @ts-ignore
import { toDate } from '../helpers/toDate.ts';

export const isBefore = (str: string, date = String(new Date())) => {
  assertString(str);

  const comparison = toDate(date);
  const original = toDate(str);

  return !!(original && comparison && original < comparison);
};
