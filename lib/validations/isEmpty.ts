// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

type IsEmptyOptions = {
  ignoreWhitespace?: boolean;
};

/**
 * @ignore
 */
const defaultIsEmptyOptions: IsEmptyOptions = {
  ignoreWhitespace: false,
};

export const isEmpty = (str: string, options: IsEmptyOptions) => {
  assertString(str);
  options = { ...defaultIsEmptyOptions, ...options };

  return (options.ignoreWhitespace ? str.trim().length : str.length) === 0;
};
