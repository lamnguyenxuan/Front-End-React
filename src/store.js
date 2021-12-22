import { configureStore } from "@reduxjs/toolkit";
import brandCheckSlice from "./slices/brandCheck.slice";
import cartSlice from "./slices/cart.slice";
import productsSlice from "./slices/products.slice";
import searchSlice from "./slices/search.slice";
import sortSlice from "./slices/sort.slice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        brandCheck: brandCheckSlice,
        sortX: sortSlice,
        search: searchSlice,
        cart: cartSlice,
    }
})

export default store;