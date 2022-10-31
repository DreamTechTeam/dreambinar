/**
 * Slice the time string to WIB time
 * @param time format (YYYY-MM-DDTHH:MM:SS.MSZ)
 * @returns HH:MM WIB
 */
const timeToWIB = (time: string): string => {
  return `${time.slice(11, 16)} WIB`;
};

export default timeToWIB;
