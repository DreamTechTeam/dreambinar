import { IDateFormat } from "./interfaces";

/**
 * Format date
 * @param {string | number} date date to be formatted
 * @returns
 * @deprecated
 */
const dateFormat: IDateFormat = (date: string | number): string => {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default dateFormat;
