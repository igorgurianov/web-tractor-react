import { priceListRepair } from "./const";

export const totalCounter = (array) => {
  const total = array.reduce((sum, currentItem) => {
    return sum + currentItem.price;
  }, 0);
  return total;
};

//console.log(totalCounter(priceListRepair));
