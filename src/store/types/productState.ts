export interface QH {
  id: number;
  timeChanged: Date;
  value: number;
}

export interface PH {
  id: number;
  timeChanged: Date;
  value: number;
}

export interface Product {
  id: number;
  name: string;
  EAN: number;
  type: string;
  weight: number;
  color: string;
  isActive: boolean;
  quantity: number;
  price: number;
}

export interface ProductState {
  isFetching: boolean;
  data: {
    productItems: Product[];
    quantityHItems: QH[];
    priceHItems: PH[];
  };
  error: null | string | Error;
}
