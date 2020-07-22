import { assertString } from '../helpers/assertString.ts';

const macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressNoColons = /^([0-9a-fA-F]){12}$/;
const macAddressWithHyphen = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithSpaces = /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithDots = /^([0-9a-fA-F]{4}).([0-9a-fA-F]{4}).([0-9a-fA-F]{4})$/;

type MACAddressOptions = {
  noColons?: boolean;
};

export const isMACAddress = (str: string, options?: MACAddressOptions) => {
  assertString(str);

  if (options && options.noColons) {
    return macAddressNoColons.test(str);
  }

  return (
    macAddress.test(str) ||
    macAddressWithHyphen.test(str) ||
    macAddressWithSpaces.test(str) ||
    macAddressWithDots.test(str)
  );
};
