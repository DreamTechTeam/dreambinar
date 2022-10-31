interface ITimeToWIB {
  (time: string | number): string;
}

export default <ITimeToWIB>function timeToWIB(time: string): string {
  return `${time.slice(11, 16)} WIB`;
};
