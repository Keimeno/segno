import { assertString } from '../helpers/assertString.ts';
import { isHexadecimal } from './isHexadecimal.ts';

export const isMongoId = (str: string) => {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
};