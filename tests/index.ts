import { assertThrows, assertEquals } from '../deps.ts';
import { segno } from '../mod.ts';

type Any = string | number | object | boolean | undefined | null;

type Check =
  | 'isAfter'
  | 'isAlpha'
  | 'isAlphanumeric'
  | 'isAscii'
  | 'isBIC'
  | 'isBase32'
  | 'isBase64'
  | 'isBefore'
  | 'isBoolean'
  | 'isBtcAddress'
  | 'isByteLength'
  | 'isCreditCard'
  | 'isCurrency'
  | 'isDataURI'
  | 'isDate'
  | 'isDecimal'
  | 'isDivisibleBy'
  | 'isEAN'
  | 'isEmail'
  | 'isEmpty'
  | 'isEthereumAddress'
  | 'isFQDN'
  | 'isFloat'
  | 'isFullWidth'
  | 'isHalfWidth'
  | 'isHash'
  | 'isHexColor'
  | 'isHexadecimal'
  | 'isHSL'
  | 'isIBAN'
  | 'isIMEI'
  | 'isIP'
  | 'isIPRange'
  | 'isISBN'
  | 'isISIN'
  | 'isISO31661Alpha2'
  | 'isISO31661Alpha3'
  | 'isISO8601'
  | 'isISRC'
  | 'isISSN'
  | 'isIdentityCard'
  | 'isIn'
  | 'isInt'
  | 'isJSON'
  | 'isJWT'
  | 'isLatLong'
  | 'isLength'
  | 'isLocale'
  | 'isLowercase'
  | 'isMACAddress'
  | 'isMD5'
  | 'isMagnetURI'
  | 'isMimeType'
  | 'isMobilePhone'
  | 'isMongoId'
  | 'isMultibyte'
  | 'isNumeric'
  | 'isOctal'
  | 'isPassportNumber'
  | 'isPort'
  | 'isPostalCode'
  | 'isRFC3339'
  | 'isRgbColor'
  | 'isSemVer'
  | 'isSlug'
  | 'isSurrogatePair'
  | 'isSvg'
  | 'isTaxID'
  | 'isURL'
  | 'isUUID'
  | 'isUppercase'
  | 'isVariableWidth'
  | 'isWhitelisted';

type Options = {
  validator: Check;
  args?: Any[];
  valid?: Any[];
  invalid?: Any[];
  error?: Any[];
};

export const test = (options: Options) => {
  const args = options.args || [];
  args.unshift(null);

  if (options.error) {
    options.error.forEach((error: Any) => {
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
    options.valid.forEach((valid: Any) => {
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
