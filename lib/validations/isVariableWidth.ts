// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

// @ts-ignore
import { fullWidth } from './isFullWidth.ts';
// @ts-ignore
import { halfWidth } from './isHalfWidth.ts';

export const isVariableWidth = (str: string) => {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
};
