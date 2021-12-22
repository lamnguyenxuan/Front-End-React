import { createSlice } from "@reduxjs/toolkit";
import { Brands } from "../components/Data/BrandProducts";

const brandCheckSlice = createSlice({
    name: "brandCheck",
    initialState: {
        brands: Brands,
    },
    reducers: {
        pick: (state, action) => {
            state.brands = Brands,
            state.brands = state.brands.find(brand => brand === action.payload)
        },
        rsBrand : (state) => {
            state.brands = []
        }
    }
})

export default brandCheckSlice.reducer;
export const { pick, rsBrand } = brandCheckSlice.actions