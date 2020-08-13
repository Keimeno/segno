// @ts-ignore allowing typedoc to build
import { assertString } from '../helpers/assertString.ts';
// @ts-ignore allowing typedoc to build
import { isHexadecimal } from './isHexadecimal.ts';

export const isMongoId = (str: string) => {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
};
