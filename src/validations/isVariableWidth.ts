import { assertString } from '../helpers/assertString.ts';

import { fullWidth } from './isFullWidth.ts';
import { halfWidth } from './isHalfWidth.ts';

export const isVariableWidth = (str: string) => {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
};
