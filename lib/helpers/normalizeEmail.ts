type NormalizeEmailOptions = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  allLowercase?: boolean;

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmailLowercase?: boolean;
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmailRemoveDots?: boolean;
  // Removes the subaddress (e.g. "+foo") from the email address
  gmailRemoveSubaddress?: boolean;
  // Conversts the googlemail.com domain to gmail.com
  gmailConvertGooglemaildotcom?: boolean;

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcomLowercase?: boolean;
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcomRemoveSubaddress?: boolean;

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahooLowercase?: boolean;
  // Removes the subaddress (e.g. "-foo") from the email address
  yahooRemoveSubaddress?: boolean;

  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandexLowercase?: boolean;

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloudLowercase?: boolean;
  // Removes the subaddress (e.g. "+foo") from the email address
  icloudRemoveSubaddress?: boolean;
};

const defaultNormalizeEmailOptions: NormalizeEmailOptions = {
  allLowercase: true,
  gmailLowercase: true,
  gmailRemoveDots: true,
  gmailRemoveSubaddress: true,
  gmailConvertGooglemaildotcom: true,
  outlookdotcomLowercase: true,
  outlookdotcomRemoveSubaddress: true,
  yahooLowercase: true,
  yahooRemoveSubaddress: true,
  yandexLowercase: true,
  icloudLowercase: true,
  icloudRemoveSubaddress: true,
};

// List of domains used by iCloud
const icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
const outlookdotcom_domains = [
  'hotmail.at',
  'hotmail.be',
  'hotmail.ca',
  'hotmail.cl',
  'hotmail.co.il',
  'hotmail.co.nz',
  'hotmail.co.th',
  'hotmail.co.uk',
  'hotmail.com',
  'hotmail.com.ar',
  'hotmail.com.au',
  'hotmail.com.br',
  'hotmail.com.gr',
  'hotmail.com.mx',
  'hotmail.com.pe',
  'hotmail.com.tr',
  'hotmail.com.vn',
  'hotmail.cz',
  'hotmail.de',
  'hotmail.dk',
  'hotmail.es',
  'hotmail.fr',
  'hotmail.hu',
  'hotmail.id',
  'hotmail.ie',
  'hotmail.in',
  'hotmail.it',
  'hotmail.jp',
  'hotmail.kr',
  'hotmail.lv',
  'hotmail.my',
  'hotmail.ph',
  'hotmail.pt',
  'hotmail.sa',
  'hotmail.sg',
  'hotmail.sk',
  'live.be',
  'live.co.uk',
  'live.com',
  'live.com.ar',
  'live.com.mx',
  'live.de',
  'live.es',
  'live.eu',
  'live.fr',
  'live.it',
  'live.nl',
  'msn.com',
  'outlook.at',
  'outlook.be',
  'outlook.cl',
  'outlook.co.il',
  'outlook.co.nz',
  'outlook.co.th',
  'outlook.com',
  'outlook.com.ar',
  'outlook.com.au',
  'outlook.com.br',
  'outlook.com.gr',
  'outlook.com.pe',
  'outlook.com.tr',
  'outlook.com.vn',
  'outlook.cz',
  'outlook.de',
  'outlook.dk',
  'outlook.es',
  'outlook.fr',
  'outlook.hu',
  'outlook.id',
  'outlook.ie',
  'outlook.in',
  'outlook.it',
  'outlook.jp',
  'outlook.kr',
  'outlook.lv',
  'outlook.my',
  'outlook.ph',
  'outlook.pt',
  'outlook.sa',
  'outlook.sg',
  'outlook.sk',
  'passport.com',
];

// List of domains used by Yahoo Mail
// This list is likely incomplete
const yahoo_domains = [
  'rocketmail.com',
  'yahoo.ca',
  'yahoo.co.uk',
  'yahoo.com',
  'yahoo.de',
  'yahoo.fr',
  'yahoo.in',
  'yahoo.it',
  'ymail.com',
];

// List of domains used by yandex.ru
const yandex_domains = [
  'yandex.ru',
  'yandex.ua',
  'yandex.kz',
  'yandex.com',
  'yandex.by',
  'ya.ru',
];

// replace single dots, but not multiple consecutive dots
const dotsReplacer = (match: string) => {
  if (match.length > 1) {
    return match;
  }
  return '';
};

export const normalizeEmail = (
  email: string,
  options?: NormalizeEmailOptions
) => {
  options = {
    ...defaultNormalizeEmailOptions,
    ...options,
  };

  const raw_parts = email.split('@');
  const domain = raw_parts.pop();
  const user = raw_parts.join('@');
  const parts = [user, domain] as string[];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmailRemoveSubaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmailRemoveDots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.allLowercase || options.gmailLowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmailConvertGooglemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloudRemoveSubaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.allLowercase || options.icloudLowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcomRemoveSubaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.allLowercase || options.outlookdotcomLowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahooRemoveSubaddress) {
      let components = parts[0].split('-');
      parts[0] =
        components.length > 1
          ? components.slice(0, -1).join('-')
          : components[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.allLowercase || options.yahooLowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.allLowercase || options.yandexLowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
  } else if (options.allLowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
};
