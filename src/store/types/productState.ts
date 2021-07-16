export interface QH {
  timeChanged: Date;
  value: number;
}

export interface PH {
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
  // quantityHistory: QH[];
  // priceHistory: PH[];
}

export interface ProductState {
  isFetching: boolean;
  data: Product[];
  error: null | string | Error;
}
