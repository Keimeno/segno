import { assertString } from '../helpers/assertString.ts';

const int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
const intLeadingZeroes = /^[-+]?[0-9]+$/;

type IntOptions = {
  allowLeadingZeroes?: boolean;
  min?: number;
  max?: number;
  lt?: number;
  gt?: number;
};

export const isInt = (str: string, options?: IntOptions) => {
  assertString(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  const regex =
    options.hasOwnProperty('allowLeadingZeroes') && !options.allowLeadingZeroes
      ? int
      : intLeadingZeroes;

  // Check min/max/lt/gt
  // @ts-ignore
  const minCheckPassed = !options.hasOwnProperty('min') || +str >= options.min;
  // @ts-ignore
  const maxCheckPassed = !options.hasOwnProperty('max') || +str <= options.max;
  // @ts-ignore
  const ltCheckPassed = !options.hasOwnProperty('lt') || +str < options.lt;
  // @ts-ignore
  const gtCheckPassed = !options.hasOwnProperty('gt') || +str > options.gt;

  return (
    regex.test(str) &&
    minCheckPassed &&
    maxCheckPassed &&
    ltCheckPassed &&
    gtCheckPassed
  );
};
