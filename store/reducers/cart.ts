import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductStoreType } from "../../types";

interface CartTypes {
  cartItems: ProductStoreType[];
}

const initialState: CartTypes = {
  cartItems: [],
};

const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
  return state.cartItems.findIndex(item => item.id === action.id);
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
    },
    setCount(state, action: PayloadAction<AddProductType>) {
      // find index and add new count on product count
      const indexItem = indexSameProduct(state, action.payload.product);
      state.cartItems[indexItem].count = action.payload.count;
    },
    clearCart(state) {
      return {
        ...state,
        cartItems: []
      }
    }
  },
});

export const { addProduct, removeProduct, setCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
