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
  let regex =
    options.hasOwnProperty('allowLeadingZeroes') && !options.allowLeadingZeroes
      ? int
      : intLeadingZeroes;

  // Check min/max/lt/gt
  let minCheckPassed = !options.min || +str >= options.min;
  let maxCheckPassed = !options.max || +str <= options.max;
  let ltCheckPassed = !options.lt || +str < options.lt;
  let gtCheckPassed = !options.gt || +str > options.gt;

  return (
    regex.test(str) &&
    minCheckPassed &&
    maxCheckPassed &&
    ltCheckPassed &&
    gtCheckPassed
  );
};
