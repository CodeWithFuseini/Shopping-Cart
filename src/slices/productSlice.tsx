
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item, Product, loading } from '../@types/product';

const initialState: Product  = {
    product: [],
    carts: [],
    loading: true
      
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProduct(state, action: PayloadAction<Item[]>){
           state.product = action.payload
        },

        isLoading(state, action: PayloadAction<boolean>){
            state.loading = action.payload;
        },

        addToCart(state, action: PayloadAction<Item>){
             const productExist = state.carts?.find((cart) => cart.id === action.payload.id);

                if(productExist){
                     productExist.quantity += 1;
                     return 
                }

                state.carts?.push({...action.payload, quantity: 1});
                
        },

        setCart(state, action: PayloadAction<Item[]>){
             state.carts = action.payload
        }
    }

})

export const { getProduct, isLoading, addToCart , setCart } = productSlice.actions

export const productReducer = productSlice.reducer