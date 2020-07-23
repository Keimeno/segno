// @ts-ignore
import { assertString } from '../helpers/assertString.ts';
// @ts-ignore
import { isIP } from './isIP.ts';

const subnetMaybe = /^\d{1,2}$/;

export const isIPRange = (str: string) => {
  assertString(str);
  const parts = str.split('/');

  // parts[0] -> ip, parts[1] -> subnet
  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  }

  // Disallow preceding 0 i.e. 01, 02, ...
  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return isIP(parts[0], 4) && +parts[1] <= 32 && +parts[1] >= 0;
};
