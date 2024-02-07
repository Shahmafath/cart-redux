import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // state.push(action.payload) --normal method to add to cart
            // to add to cart and additionally we add quantity to it. then
            const existingProduct = state.find(item => item.id == action.payload.id)
            if(existingProduct){
                const newState = state.filter(item => item.id != existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                state = ({...newState, existingProduct})
            }else{
                state.push({...action.payload, quantity: 1, totalPrice: action.payload.price})
            }
        },
        removeFromCart: (state, action) => {
           return state.filter(item => item.id!=action.payload)
        },
        emptyCart: (state) => {
            return state = []
        },
        incQuantity: (state,action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            const newState = state.filter(item => item.id != existingProduct.id)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            state = ({...newState, existingProduct})
        },
        decQuantity: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            const newState = state.filter(item => item.id != existingProduct.id)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            state = ({...newState, existingProduct})
        }
    }
})

export const {addToCart, removeFromCart, emptyCart, incQuantity, decQuantity} = cartSlice.actions

export default cartSlice.reducer