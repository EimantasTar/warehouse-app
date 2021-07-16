import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { Product, ProductState } from "../types/productState";
import {
  addItem,
  getAllItems,
  parseAllItems,
  updateItem,
} from "../../utils/functions/localStorageFunctions";

const sliceName = "product";

export const updateProduct = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string }
>(`${sliceName}/updateProduct`, (product, { rejectWithValue }) => {
  try {
    const allItems: string | null = updateItem("products", product);
    const parsedItems = allItems ? parseAllItems(allItems) : [];
    const index: number = parsedItems.findIndex((x) => x.id === product.id);
    return parsedItems[index];
  } catch (error) {
    const { message }: { message: string } = error;
    return rejectWithValue(message);
  }
});

export const getProducts = createAsyncThunk<
  Product[],
  null,
  { rejectValue: string }
>(`${sliceName}/getProducts`, (_, { rejectWithValue }) => {
  try {
    const allItems: string | null = getAllItems("products");
    return allItems ? parseAllItems(allItems) : [];
  } catch (error) {
    const { message }: { message: string } = error;
    return rejectWithValue(message);
  }
});

export const addProduct = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string }
>(`${sliceName}/addProduct`, (newProduct, { rejectWithValue }) => {
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
const pendingStateUpdate = (state: Draft<[ProductState][0]>) => {
  state.isFetching = true;
  state.error = null;
};

const rejectStateUpdate = (
  state: Draft<[ProductState][0]>,
  { payload }: { payload: string | undefined }
) => {
  state.isFetching = false;
  if (payload) {
    state.error = payload;
  }
};

export const productSlice = createSlice({
  name: sliceName,
  initialState: initialState.product,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProduct.pending, pendingStateUpdate);
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      const index = state.data.findIndex((item) => item.id === payload.id);
      if (index < 0) {
        state.data.push(payload);
      }
    });
    builder.addCase(addProduct.rejected, rejectStateUpdate);
    builder.addCase(getProducts.pending, pendingStateUpdate);
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.data = payload;
    });
    builder.addCase(getProducts.rejected, rejectStateUpdate);
    builder.addCase(updateProduct.pending, pendingStateUpdate);
    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      const index = state.data.findIndex((item) => item.id === payload.id);
      if (index >= 0) {
        state.data[index] = payload;
      }
    });
    builder.addCase(updateProduct.rejected, rejectStateUpdate);
  },
});
