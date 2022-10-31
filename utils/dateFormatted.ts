import { IDateFormat } from "./interfaces";

export default <IDateFormat>function dateFormat(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
