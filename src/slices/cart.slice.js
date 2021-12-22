import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getById } from "../components/Data/ProductsData";

const cartSlice = createSlice({
    name: "cart",
    initialState: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    reducers: {
        addItem(state, action) {
            const item = state.find(product => product.id == action.payload);
            if (item) item.quantity += 1;
            else {
                const product = getById(action.payload);
                state.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeItem(state, action) {
            const idx = state.findIndex((product) => product.id == action.payload)
            state.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        subItem(state, action) {
            const item = state.find(product => product.id == action.payload);
            if (item.quantity > 1) item.quantity -= 1;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        resetItem(state) {
            state = [];
            localStorage.setItem("cart", JSON.stringify(state));
            return state;
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, subItem, resetItem } = cartSlice.actions;

const selectCartItems = (state) => state.cart;

const selectTotalItems = createSelector(
    selectCartItems,
    (items) => items.reduce((total, item) => (total += item.quantity), 0)
)

const selectTotalPrice = createSelector(
    selectCartItems,
    (items) => items.reduce((total, item) => (total += item.newPrice * item.quantity), 0)
)
export { selectTotalItems, selectTotalPrice };