import { assertString } from '../helpers/assertString.ts';

const notBase64 = /[^A-Z0-9+\/=]/i;
const urlSafeBase64 = /^[A-Z0-9_\-]+$/i;

type Base64Options = {
  urlSafe?: boolean;
};

const defaultBase64Options: Base64Options = {
  urlSafe: false,
};

export const isBase64 = (str: string, options?: Base64Options) => {
  assertString(str);
  options = {
    ...defaultBase64Options,
    ...options,
  };

  const len = str.length;

  if (options.urlSafe) {
    return urlSafeBase64.test(str);
  }

  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  const firstPaddingChar = str.indexOf('=');
  return (
    firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === '=')
  );
};
