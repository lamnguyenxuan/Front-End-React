import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../components/Data/ProductsData";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        products: ProductsData,
    },
    reducers: {
        search: (state, action) => {
            state.products = ProductsData,
            state.products = state.products.filter(product => product.title.toLowerCase().includes(action.payload));
        },
    }
})

export default searchSlice.reducer;
export const { search } = searchSlice.actions;