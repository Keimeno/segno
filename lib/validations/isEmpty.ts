// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';

type EmptyOptions = {
  ignoreWhitespace?: boolean;
};

/**
 * @ignore
 */
const defaultEmptyOptions: EmptyOptions = {
  ignoreWhitespace: false,
};

export const isEmpty = (str: string, options?: EmptyOptions) => {
  assertString(str);
  options = { ...defaultEmptyOptions, ...options };

  return (options.ignoreWhitespace ? str.trim().length : str.length) === 0;
};
