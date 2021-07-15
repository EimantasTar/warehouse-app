import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { Product } from "../types/productState";

const sliceName = "products";

const getAllItems = (key: string) => {
  return localStorage.getItem(key);
};

const addItem = (key: string, item: Product): string | null => {
  let existing: string | null | string[] = localStorage.getItem(key);
  existing = existing ? existing.split(",") : [];
  existing.push(`${JSON.stringify(item)}`);
  localStorage.setItem(key, `${existing.toString()}`);
  return localStorage.getItem(key);
};

const parseAllItems = (allItems: string): Product[] => {
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

export const addProduct = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string }
>(`${sliceName}/addProduct`, async (newProduct, { rejectWithValue }) => {
  try {
    const allItems: string | null = addItem("products", newProduct);
    const parsedArr: Product[] = allItems ? parseAllItems(allItems) : [];
    return parsedArr[parsedArr.length - 1];
  } catch (error) {
    const { message }: { message: string } = error;
    return rejectWithValue(message);
  }
});

/* eslint-disable no-param-reassign */
export const productSlice = createSlice({
  name: sliceName,
  initialState: initialState.product,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProduct.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.data.push(payload);
    });
    builder.addCase(addProduct.rejected, (state, { payload }) => {
      state.isFetching = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});
