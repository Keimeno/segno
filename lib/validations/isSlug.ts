import { assertString } from '../helpers/assertString.ts';

const charsetRegex = /^[^\s-_](?!.*?[-_]{2,})([a-z0-9-\\]{1,})[^\s]*[^-_\s]$/;

export const isSlug = (str: string) => {
  assertString(str);
  return charsetRegex.test(str);
};
