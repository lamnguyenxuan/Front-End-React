import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../components/Data/ProductsData";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: ProductsData,
    },
    reducers: {
        brand: (state, action) => {
            state.products = ProductsData,
                state.products = state.products.filter(p => p.brand === action.payload)
        },
        all: (state) => {
            state.products = ProductsData,
                state.products = state.products.sort((a, b) => a.newPrice - b.newPrice)
        },
    }
})

export default productsSlice.reducer;

export const { brand, all } = productsSlice.actions;