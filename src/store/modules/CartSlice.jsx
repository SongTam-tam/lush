import { createSlice } from '@reduxjs/toolkit';
import shopData from '../../assets/api/shopData';

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : shopData,

    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
    priceTotal: 0,
    quantityTotal: 0,
    paymentCart: localStorage.getItem('paymentCart')
        ? JSON.parse(localStorage.getItem('paymentCart'))
        : [],
    paymentTotal: 0,
    paymentPriceTotal: 0,
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const id = action.payload.id;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                item.itemtotal = item.price * item.quantity;
            } else {
                state.carts.push({
                    ...action.payload,
                    quantity: 1,
                    itemtotal: action.payload.price,
                });
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        removeCart: (state, action) => {
            const id = action.payload;
            state.carts = state.carts.filter((cart) => cart.id !== id);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        emptyCart: (state) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        totalCart: (state) => {
            state.priceTotal = state.carts.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            state.quantityTotal = state.carts.reduce((sum, item) => sum + item.quantity, 0);
        },

        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                item.itemtotal = item.price * item.quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const itemIndex = state.carts.findIndex((cart) => cart.id === id);
            if (itemIndex !== -1) {
                const item = state.carts[itemIndex];
                item.quantity--;
                if (item.quantity <= 0) {
                    state.carts.splice(itemIndex, 1);
                } else {
                    item.itemtotal = item.price * item.quantity;
                }
                localStorage.setItem('carts', JSON.stringify(state.carts));
            }
        },
        updateChk: (state, action) => {
            const id = action.payload;
            const item = state.items.find((it) => it.id === id);
            if (item) {
                item.chk = !item.chk;
            }
        },
        payment: (state, action) => {
            state.paymentCart = state.carts.filter((item) => item.isChk === true);
            state.paymentTotal = state.paymentCart.reduce((sum, item) => sum + item.quantity, 0);
            state.paymentPriceTotal = state.paymentCart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
        },
        Compl: (state, action) => {
            state.carts = [];
        },
    },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
