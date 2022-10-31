import { IMoneyFormat } from "./interfaces";

export default <IMoneyFormat>function moneyFormat(nominal) {
  const validateNominal =
    typeof nominal === "string" ? parseInt(nominal) : nominal;

  const formattedMoney = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(validateNominal);

  return formattedMoney;
};
