import { proxy } from "valtio";

export const state = proxy({
    // UI
    loading: false,
    error: null,
    success: null,
    // User
    user: null,
    products: [],
    cart: [],
    cartTotal: 0,
    cartItems: 0,
    checkout: false,
    orders: [],
    order: null,
});