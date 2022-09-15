import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductStoreType } from "../../types";

interface CartTypes {
  cartItems: ProductStoreType[];
}

const initialState: CartTypes = {
  cartItems: [],
};

const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
  const sameProduct = (product: ProductStoreType) => {
    product.id === action.id &&
      product.color === action.color &&
      product.size === action.size;
  };

  return state.cartItems.findIndex(sameProduct);
};

type AddProductType = {
  product: ProductStoreType;
  count: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductType>) => {
      const cartItems = state.cartItems;

      const index = indexSameProduct(state, action.payload.product);
      if (index > -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],
      };
    },
    removeProduct: (state, action: PayloadAction<ProductStoreType>) => {
        state.cartItems.splice(indexSameProduct(state, action.payload), 1);
    }
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
