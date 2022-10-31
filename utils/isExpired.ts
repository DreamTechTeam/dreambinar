import { IIsExpired } from "./interfaces";

export default <IIsExpired>function isExpired(expirationDate) {
  return new Date(expirationDate).getTime() < new Date().getTime();
};
