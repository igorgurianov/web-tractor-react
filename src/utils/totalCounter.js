import { priceListRepair } from "./const";

export const totalCounter = (array) => {
  const total = array.reduce((sum, currentItem) => {
    return sum + currentItem.price;
  }, 0);
  return total;
};

//console.log(totalCounter(priceListRepair));

export const RepairData = () => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 60);
  // const formattedResult = `${futureDate.getDate()}.${
  //   futureDate.getMonth() + 1
  // }.${futureDate.getFullYear()}`;

  const formattedResult = futureDate.toLocaleDateString("ru-RU");
  return formattedResult;
};
