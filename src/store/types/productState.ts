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
  data: Product[];
  error: null | string | Error;
}
