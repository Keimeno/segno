// @ts-ignore
import { assertString } from '../helpers/assertString.ts';

/**
 * @ignore
 */
const eth = /^(0x)[0-9a-f]{40}$/i;

export const isEthereumAddress = (str: string) => {
  assertString(str);
  return eth.test(str);
};
