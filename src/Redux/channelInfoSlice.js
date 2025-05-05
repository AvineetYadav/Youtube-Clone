import { createSlice } from "@reduxjs/toolkit";

const channelInfoSlice = createSlice({
  name: "channelInfo",
  initialState: {},
  reducers: {
    addChannelInfo: (state, action) => {
      state.channelInfo = action.payload;
    },
    addDescription: (state, action) => {
      state.description = action.payload;
    },
  }
});

export default channelInfoSlice.reducer;
export const { addChannelInfo, addDescription } = channelInfoSlice.actions;
