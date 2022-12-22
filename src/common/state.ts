import { proxy } from "valtio";

type stateTypes = {
  // UI
  loading: boolean;
  error: {
    message: string;
    code: string;
  };
  // User
  user: {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
  };
  products: any[];
  cart: any[];
  cartTotal: number;
  cartItems: number;
  checkout: boolean;
  orders: any[];
  order: any;
};

export const state = proxy<stateTypes>({
  // UI
  loading: false,
  error: {
    message: "",
    code: "",
  },
  // User
  user: {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  },
  products: [],
  cart: [],
  cartTotal: 0,
  cartItems: 0,
  checkout: false,
  orders: [],
  order: null,
});
