import { assertString } from './assertString.ts';

export const whitelist = (str: string, chars: string) => {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
};
