import { assertString } from './assertString.ts';

const ltrim = (str: string, chars: string) => {
  assertString(str);

  const pattern = chars
    ? new RegExp(`^[${chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]+`, 'g')
    : /^\s+/g;
  return str.replace(pattern, '');
};

const rtrim = (str: string, chars: string) => {
  assertString(str);

  const pattern = chars
    ? new RegExp(`[${chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]+$`, 'g')
    : /\s+$/g;
  return str.replace(pattern, '');
};

export const trim = (str: string, chars: string) => {
  return rtrim(ltrim(str, chars), chars);
};
