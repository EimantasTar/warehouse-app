import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { Product } from '../types/productState';

const sliceName = 'product';

const getAllItems = (key: string): string | null => {
    return localStorage.getItem(key);
};

const addItem = (key: string, item: Product): string | null => {
    let existing: string | null | string[] = localStorage.getItem(key);
    existing = existing ? existing.split(',') : [];
    existing.push(`${JSON.stringify(item)}`);
    localStorage.setItem(key, `${existing.toString()}`);
    return localStorage.getItem(key);
};

const updateItem = (key: string, item: Product): string | null => {
    debugger;
    const allItems: string | null = getAllItems(key);
    const parsedItems = allItems ? parseAllItems(allItems) : [];
    const index = parsedItems.findIndex(x => x.id === item.id);
    if (index !== -1) {
        parsedItems[index] = item;
    }
    localStorage.setItem(key, parsedItems.toString());
    return localStorage.getItem(key);
};

const parseAllItems = (allItems: string): Product[] => {
    const arr: string[] = allItems?.split('},') || [];
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

export const updateProduct = createAsyncThunk<Product, Product, { rejectValue: string }>(
    `${sliceName}/updateProduct`, async (product, { rejectWithValue }) => {
        try {
            const allItems: string | null = updateItem('products', product);
            const parsedItems = allItems ? parseAllItems(allItems) : [];
            const index: number = parsedItems.findIndex(x => x.id === product.id);
            console.log(parsedItems[index]);
            return parsedItems[index];
        } catch (error) {
            const { message }: { message: string } = error;
            return rejectWithValue(message);
        }
    }
);

export const getProducts = createAsyncThunk<Product[], null, { rejectValue: string }>(
    `${sliceName}/getProducts`, async (_, { rejectWithValue }) => {
        try {

            const allItems: string | null = getAllItems('products');
            return allItems ? parseAllItems(allItems) : [];
        } catch (error) {
            const { message }: { message: string } = error;
            return rejectWithValue(message);
        }
    }
);

export const addProduct = createAsyncThunk<Product,
    Product,
    { rejectValue: string }>(`${sliceName}/addProduct`, async (newProduct, { rejectWithValue }) => {
    try {
        const allItems: string | null = addItem('products', newProduct);
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
            const index = state.data.findIndex(item => item.id === payload.id);
            if (index < 0) {
                state.data.push(payload);
            }
        });
        builder.addCase(addProduct.rejected, (state, { payload }) => {
            state.isFetching = false;
            if (payload) {
                state.error = payload;
            }
        });
        builder.addCase(getProducts.pending, ((state) => {
            state.isFetching = true;
            state.error = null;
        }));
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.data = payload;
        });
        builder.addCase(getProducts.rejected, (state, { payload }) => {
            state.isFetching = false;
            if (payload) {
                state.error = payload;
            }
        });
    },
});
