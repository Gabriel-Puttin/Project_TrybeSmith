export interface Orders {
  id?: number;
  userId: number;
  productsIds: number[];
}

export interface Objreturn {
  type: null | number;
  message: Orders[] | string;
}