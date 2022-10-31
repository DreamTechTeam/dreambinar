import { IAbbreviateNumber } from "./interfaces";

export const INTERNATIONAL_SYMBOL = [
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
export const INDONESIAN_SYMBOL = ["", "rb", "jt", "m", "t", "p", "e"];

export const abbreviateNumber: IAbbreviateNumber = (
  nominal,
  suffixSymbol,
  floatDigit = 0
) => {
  const validNomninal =
    typeof nominal === "string" ? parseInt(nominal) : nominal;

  let tier = (Math.log10(Math.abs(nominal)) / 3) | 0;
  if (tier === 0) return nominal;
  let suffix = suffixSymbol[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = nominal / scale;

  return scaled.toFixed(floatDigit) + suffix;
};
