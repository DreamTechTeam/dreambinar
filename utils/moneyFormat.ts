import { IMoneyFormat } from "./interfaces";

/**
 * Format money
 * @param {number | string} nominal nominal to be formatted
 * @param {string} [locale="id-ID"] decimal separator
 * @param {string} [currency="IDR"] currency to be formatted
 * @returns
 */
const moneyFormat: IMoneyFormat = (
  nominal: number | string,
  locale: string = "id-ID",
  currency: string = "IDR"
): string => {
  const validateNominal =
    typeof nominal === "string" ? parseInt(nominal) : nominal;

  const formattedMoney = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(validateNominal);

  return formattedMoney;
};

export default moneyFormat;
