import { createSlice } from "@reduxjs/toolkit";
import { getAll, ProductsData } from "../components/Data/ProductsData";


const sortSlice = createSlice({
    name: "sortX",
    initialState: {
        products: [...ProductsData].sort((a, b) => a.newPrice - b.newPrice),
        sortX: "asc",
    },
    reducers: {
        sortX: (state, action) => {
            if (action.payload === "asc") {
                state.products = [...ProductsData];
                state.products = state.products.sort((a, b) => a.newPrice - b.newPrice)
            } else {
                if (action.payload === "desc") {
                    state.products = [...ProductsData];
                    state.products = state.products.sort((a, b) => b.newPrice - a.newPrice);
                } else {
                    state.products = []
                }

            }
            // action.payload === "asc" ?
            //     state.products = state.products.sort((a, b) => a.newPrice - b.newPrice) :
            //     action.payload === "desc" ? state.products = state.products.sort((a, b) => b.newPrice - a.newPrice) : state.products = ProductsData;
        },
    }
})

export default sortSlice.reducer;
export const { sortX } = sortSlice.actions;