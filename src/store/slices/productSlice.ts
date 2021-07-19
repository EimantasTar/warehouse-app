import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { PH, Product, ProductState, QH } from '../types/productState';
import {
  addHistoryItem,
  addItem,
  getAllItems,
  parseAllItems, parseHistoryItems,
  updateItem,
} from '../../utils/functions/localStorageFunctions';

const sliceName = "product";

export const updateProduct = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string }
>(`${sliceName}/updateProduct`, (product, { rejectWithValue }) => {
  try {
    const allItems: string | null = updateItem("products", product);
    debugger;
    const parsedItems = allItems ? parseAllItems(allItems) : [];
    debugger;
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
    const parsedArr1: Product[] = allItems ? parseAllItems(allItems) : [];
    const addedProduct: Product = parsedArr1[parsedArr1.length - 1];

    const {id, quantity, price} = addedProduct;

    const allQuantityHItems: string | null = addHistoryItem("quantityHItems", id, quantity);
    const parsedArr2: QH[] = allQuantityHItems ? parseHistoryItems(allQuantityHItems) : [];
    const addedQHItem: QH = parsedArr2[parsedArr2.length - 1];

    const allPriceHItems: string | null = addHistoryItem("priceHItems", id, price);
    const parsedArr3: PH[] = allPriceHItems ? parseHistoryItems(allPriceHItems) : [];
    const addedPHItem: QH = parsedArr3[parsedArr3.length - 1];

    console.log(addedProduct);
    console.log(addedQHItem);
    console.log(addedPHItem);

    return addedProduct;
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
      const index = state.data.productItems.findIndex(
        (item) => item.id === payload.id
      );
      if (index < 0) {
        state.data.productItems.push(payload);
      }
    });
    builder.addCase(addProduct.rejected, rejectStateUpdate);
    builder.addCase(getProducts.pending, pendingStateUpdate);
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.data.productItems = payload;
    });
    builder.addCase(getProducts.rejected, rejectStateUpdate);
    builder.addCase(updateProduct.pending, pendingStateUpdate);
    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      const index = state.data.productItems.findIndex(
        (item) => item.id === payload.id
      );
      if (index >= 0) {
        state.data.productItems[index] = payload;
      }
    });
    builder.addCase(updateProduct.rejected, rejectStateUpdate);
  },
});
