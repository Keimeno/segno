// @ts-ignore
import { assertString } from '../helpers/assertString.ts';
// @ts-ignore
import { alpha } from '../helpers/alpha.ts';

export const isAlpha = (str: string, locale = 'en-US') => {
  assertString(str);

  if (locale in alpha) {
    return (alpha as any)[locale].test(str);
  }

  throw new Error(`Invalid locale '${locale}'`);
};

export const alphaLocales = Object.keys(alpha);
