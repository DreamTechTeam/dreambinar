import { IIsExpired } from "./interfaces";

/**
 * Check if the date is expired
 * @param expirationDate date to be checked
 * @returns
 */
const isExpired: IIsExpired = (expirationDate: string | number): boolean => {
  return new Date(expirationDate).getTime() < new Date().getTime();
};

export default isExpired;
