import { PH, Product, QH } from '../../store/types/productState';

export const getAllItems = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const parseAllItems = (allItems: string): Product[] => {  // reiks sujungti i viena gal
  debugger;
  const arr: string[] = allItems?.split("},") || [];
  const parsedArr: Product[] = [];
  arr.forEach((item, index) => {
    let fixedItem;
    if (arr.length !== index + 1) {
      fixedItem = `${item}}`;
    } else {
      fixedItem = item;
    }
    const parsedItem: Product = JSON.parse(fixedItem);
    parsedArr.push(parsedItem);
  });
  return parsedArr;
};

export const parseHistoryItems = (allItems: string): QH[] | PH[] => { // reiks sujungti i viena gal
  debugger;
  const arr: string[] = allItems?.split("},") || [];
  const parsedArr: QH[] | PH[] = [];
  arr.forEach((item, index) => {
    let fixedItem;
    if (arr.length !== index + 1) {
      fixedItem = `${item}}`;
    } else {
      fixedItem = item;
    }
    const parsedItem: QH | PH = JSON.parse(fixedItem);
    parsedArr.push(parsedItem);
  });
  return parsedArr;
};

export const addItems = (
  key: string,
  parsedItems: Product[]
): string | null => {
  const readyArr: string[] = [];
  parsedItems.forEach((product: Product) => {
    readyArr.push(JSON.stringify(product));
  });
  localStorage.setItem(key, readyArr.toString());
  return getAllItems(key);
};

export const addItem = (key: string, item: Product): string | null => {
  const allItems: string | null = getAllItems(key);
  const parsedItems: Product[] = allItems ? parseAllItems(allItems) : [];
  parsedItems.unshift(item);
  const readyArr: string[] = [];
  parsedItems.forEach((product: Product) => {
    readyArr.push(JSON.stringify(product));
  });
  localStorage.setItem(key, readyArr.toString());
  return getAllItems(key);
};

export const addHistoryItem = (key: string, id: number, quantity: number ) => {
  const allItems: string | null = getAllItems(key);
  const parsedItems: QH[] = allItems ? parseHistoryItems(allItems) : [];
  parsedItems.unshift({
    id,
    timeChanged: new Date(),
    value: quantity
  });
  const readyArr: string[] = [];
  parsedItems.forEach((item: QH) => {
    readyArr.push(JSON.stringify(item));
  });
  localStorage.setItem(key, readyArr.toString());
  return getAllItems(key);
};

export const updateItem = (key: string, item: Product): string | null => {
  const allItems: string | null = getAllItems(key);
  const parsedItems: Product[] = allItems ? parseAllItems(allItems) : [];
  const index = parsedItems.findIndex((x: Product) => x.id === item.id);
  if (index !== -1) {
    parsedItems[index] = item;
  }
  debugger;
  return addItems(key, parsedItems);
};
