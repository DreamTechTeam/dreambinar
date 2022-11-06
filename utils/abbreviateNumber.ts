import { IAbbreviateNumber } from "./interfaces";

/**
 * Suffixed for abbreviate number
 * @type {string[]} suffix
 */
export const INTERNATIONAL_SYMBOL: string[] = [
  "",
  "k",
  "m",
  "b",
  "t",
  "q",
  "Q",
  "s",
  "S",
];

/**
 * Suffixed for abbreviate number
 * @type {string[]} suffix
 */
export const INDONESIAN_SYMBOL: string[] = ["", "rb", "jt", "m", "t", "p", "e"];

/**
 * Abbreviate number
 * @param {int} nominal number to be abbreviated
 * @param {string[]} suffixSymbol suffixed for number
 * @param {number} floatDigit float point
 * @return
 */
export const abbreviateNumber: IAbbreviateNumber = (
  nominal,
  suffixSymbol,
  floatDigit = 0
) => {
  let tier = (Math.log10(Math.abs(nominal)) / 3) | 0;
  if (tier === 0) return nominal;
  let suffix = suffixSymbol[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = nominal / scale;

  return `${scaled.toFixed(floatDigit)}${suffix}`;
};
