import { assertString } from '../helpers/assertString.ts';

/**
 * @ignore
 */
const htmlCommentRegex = /<!--([\s\S]*?)-->/g;

/**
 * @ignore
 */
const entityRegex = /\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/gim;

/**
 * @ignore
 */
const svgRegex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i;

/**
 *
 */
export const isSvg = (str: string) => {
  assertString(str);

  return svgRegex.test(
    str.replace(entityRegex, '').replace(htmlCommentRegex, '')
  );
};
