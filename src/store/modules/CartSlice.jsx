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
    totalPrice: 0,
    deliveryFee: 3000,
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

        cartTotal: (state) => {
            state.deliveryFee = state.priceTotal > 50000 ? 0 : 3000;
            state.totalPrice = state.priceTotal + state.deliveryFee;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                item.itemtotal = item.price * item.quantity;
            }

            // 👉 수량 변경 후 바로 재계산
            state.priceTotal = state.carts.reduce((sum, i) => sum + i.price * i.quantity, 0);
            state.deliveryFee = state.priceTotal > 50000 ? 0 : 3000;
            state.totalPrice = state.priceTotal + state.deliveryFee;

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
            }

            // 👉 수량 변경 후 바로 재계산
            state.priceTotal = state.carts.reduce((sum, i) => sum + i.price * i.quantity, 0);
            state.deliveryFee = state.priceTotal > 50000 ? 0 : 3000;
            state.totalPrice = state.priceTotal + state.deliveryFee;

            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        updateChk: (state, action) => {
            const id = action.payload;
            const item = state.items.find((it) => it.id === id);
            if (item) {
                item.chk = !item.chk;
            }
        },

        payment: (state) => {
            state.paymentCart = state.carts.filter((item) => item.isChk === true);
            state.paymentTotal = state.paymentCart.reduce((sum, item) => sum + item.quantity, 0);
            state.paymentPriceTotal = state.paymentCart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
        },

        Compl: (state) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
    },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
