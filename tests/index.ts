import { assertThrows, assertEquals } from '../deps.ts';
import { segno } from '../mod.ts';

export const test = (options: any) => {
  const args = options.args || [];
  args.unshift(null);

  if (options.error) {
    options.error.forEach((error: Error) => {
      args[0] = error;

      try {
        assertThrows(() => (segno as any)[options.validator](...args));
      } catch (err) {
        const warning =
          `validator.${options.validator}(${args.join(', ')})` +
          ` passed but should error`;

        throw new Error(warning);
      }
    });
  }

  if (options.valid) {
    options.valid.forEach((valid: any) => {
      args[0] = valid;

      assertEquals((segno as any)[options.validator](...args), true);
    });
  }

  if (options.invalid) {
    options.invalid.forEach((invalid: any) => {
      args[0] = invalid;

      assertEquals((segno as any)[options.validator](...args), false);
    });
  }
};

export const repeat = (str: string, count: number) => {
  let result = '';

  for (; count; count--) {
    result += str;
  }

  return result;
};
