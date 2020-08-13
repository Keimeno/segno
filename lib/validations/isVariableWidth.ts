// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';

// @ts-ignore allowing typedoc to build
import { fullWidth } from './isFullWidth.ts';
// @ts-ignore allowing typedoc to build
import { halfWidth } from './isHalfWidth.ts';

export const isVariableWidth = (str: string) => {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
};
