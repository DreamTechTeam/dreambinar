export type IIsExpired = (expirationDate: string | number) => boolean;
export type IMoneyFormat = (nominal: number | string) => string;
export type IDateFormat = (date: string | number) => string;
export type IAbbreviateNumber = (
  nominal: int,
  suffixSymbol: string[],
  number: int
) => string;
