export interface Products {
  id?: number;
  name: string;
  amount: string;
  orderId?: number | null;
}

export interface Objreturn {
  type: null | number;
  message: Products | Products[] | string;
}