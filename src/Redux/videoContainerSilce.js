import { createSlice } from "@reduxjs/toolkit";

const videoContainerSlice = createSlice({
  name: "videoContainer",
  initialState: {
    videoContainer: {},
  },
  reducers: {
    addVideoContainer: (state, action) => {
      state.videoContainer = action.payload;
    },
  },
});

export const { addVideoContainer } = videoContainerSlice.actions;
export default videoContainerSlice.reducer;
