import { assertString } from './assertString.ts';
import { toString } from './toString.ts';

type ContainsOptions = {
  ignoreCase?: boolean;
};

const defaultContainsOptions: ContainsOptions = {
  ignoreCase: false,
};

export const contains = (str: string, elem: any, options?: ContainsOptions) => {
  assertString(str);
  options = { ...defaultContainsOptions, ...options };
  return options.ignoreCase
    ? str.toLowerCase().indexOf(toString(elem).toLowerCase()) >= 0
    : str.indexOf(toString(elem)) >= 0;
};
