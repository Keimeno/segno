export const assertString = (input: string) => {
  const isString = typeof input === 'string';

  if (!isString) {
    throw new TypeError(`Expected a string but received ${typeof input}.`);
  }
};
