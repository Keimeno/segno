// @ts-ignore allowing typedoc to build
import { isInt } from './isInt.ts';

export const isPort = (str: string) => {
  return isInt(str, { min: 0, max: 65535 });
};
