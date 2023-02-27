import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigStoreType, ProductStoreType } from "../../types";

interface ConfigTypes {
  configs: ConfigStoreType[];
}

const initialState: ConfigTypes = {
  configs: [],
};



const configThemeSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfigs: (state, action: PayloadAction<ConfigStoreType[]>) => {
      return {
        ...state,
        configs: [...action.payload],
      };
    }
  },
});

export const { setConfigs } = configThemeSlice.actions;
export default configThemeSlice.reducer;
