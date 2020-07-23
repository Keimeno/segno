// @ts-ignore
import { assertString } from '../helpers/assertString.ts';
// @ts-ignore
import { isHexadecimal } from './isHexadecimal.ts';

export const isMongoId = (str: string) => {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
};
