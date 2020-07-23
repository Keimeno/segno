// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

/**
 * @ignore
 */
const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export const isSurrogatePair = (str: string) => {
  assertString(str);
  return surrogatePair.test(str);
};
