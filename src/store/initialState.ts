import { ProductState } from "./types/productState";

export interface IInitialState {
  product: ProductState;
}

const initialState: IInitialState = {
  product: {
    isFetching: false,
    data: {
      productItems: [],
      quantityHItems: [],
      priceHItems: [],
    },
    error: null,
  },
};

export default initialState;
