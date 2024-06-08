import { createSlice } from "@reduxjs/toolkit";

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: {
    searchValue: {},
  },
  reducers: {
    addSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { addSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;
