export type IIsExpired = (expirationDate: string | number) => boolean;
export type IMoneyFormat = (
  nominal: number | string,
  locale?: string,
  currency?: string
) => string;
export type IDateFormat = (date: string | number) => string;
export type IAbbreviateNumber = (
  nominal: int,
  suffixSymbol: string[],
  floatDigit?: number
) => string;
export type ITimeToWIB = (time: string) => string;
