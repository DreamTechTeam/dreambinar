import { ITimeToWIB } from "./interfaces/index.d";

/**
 * Convert time to WIB
 * @param {string | number} time time to be converted
 * @returns
 */
const timeToWIB: ITimeToWIB = (time: string): string => {
  return `${new Date(time).toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  })} WIB`;
};

export default timeToWIB;
