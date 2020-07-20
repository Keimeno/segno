import isFloat from '../validations/isFloat.ts';

export const toFloat = (str: string) => {
  if (!isFloat(str)) return NaN;

  return parseFloat(str);
};
