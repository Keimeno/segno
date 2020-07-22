import { assertString } from '../helpers/assertString.ts';
import { toDate } from '../helpers/toDate.ts';

export const isBefore = (str: string, date = String(new Date())) => {
  assertString(str);

  const comparison = toDate(date);
  const original = toDate(str);

  return !!(original && comparison && original < comparison);
};
