import { assertString } from './assertString.ts';

export const blacklist = (str: string, chars: string) => {
  assertString(str);
  return str.replace(new RegExp(`[${chars}]+`, 'g'), '');
};
