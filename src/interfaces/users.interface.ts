export interface Users {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Objreturn {
  type: null | number;
  message: Users | string;
}