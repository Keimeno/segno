// @ts-ignore
import { assertString } from '../helpers/assertString.ts';
// @ts-ignore
import { decimal } from '../helpers/alpha.ts';

/**
 * @ignore
 */
const numericNoSymbols = /^[0-9]+$/;

type NumericOptions = {
  noSymbols?: boolean;
  locale?: any;
};

export const isNumeric = (str: string, options?: NumericOptions) => {
  assertString(str);

  if (options && options.noSymbols) {
    return numericNoSymbols.test(str);
  }

  return new RegExp(
    `^[+-]?([0-9]*[${
      (options || {}).locale ? (decimal as any)[options?.locale] : '.'
    }])?[0-9]+$`
  ).test(str);
};
