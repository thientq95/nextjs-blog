import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigStoreType, ProductStoreType } from "../../types";

interface ConfigTypes {
  configs: ConfigStoreType[];
}

const initialState: ConfigTypes = {
  configs: [],
};

// const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
//   const sameProduct = (product: ProductStoreType) => {
//     product.id === action.id &&
//       product.color === action.color &&
//       product.size === action.size;
//   };

//   return state.cartItems.findIndex(sameProduct);
// };


const configThemeSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    // setConfigs: (state, action: PayloadAction<ConfigStoreType[]>) => {
    //   return {
    //     ...state,
    //     configs: [...action.payload],
    //   };
    // }
  },
});

// export const { setConfigs } = configThemeSlice.actions;
export default configThemeSlice.reducer;
