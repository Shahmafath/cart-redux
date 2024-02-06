import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// to call api here we use createASyncThunk()
// fetchProducts is an action
export const fetchProducts = createAsyncThunk('allProducts/fetchProducts', async () => {
    const response = await axios.get('https://dummyjson.com/products')
    // to store in local storage
    // redux is not used to permanently store data. so, we use local storage here
    localStorage.setItem("products", JSON.stringify( response.data.products))
     return response.data.products
})

const productSlice = createSlice({
    name: 'allProducts',
    initialState: {
        products: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false
            state.products = []
            state.error = "API call failed. Please wait!"
        })
    }
})

export default productSlice.reducer