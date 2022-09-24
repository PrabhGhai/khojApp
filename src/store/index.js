import { createSlice, configureStore } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "searchbar",
  initialState: { key: "" },
  reducers: {
    searchkey(state, action) {
      const search = action.payload;
      state.key = search;
    },
  },
});

export const searchitem = searchSlice.actions;

export const store = configureStore({
  reducer: searchSlice.reducer,
});
