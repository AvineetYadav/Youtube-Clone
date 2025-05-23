import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
      if (state.message.length > OFFSET_LIVE_CHAT) {
        const numberOfMessagesToRemove =
          state.message.length - OFFSET_LIVE_CHAT;
        state.message.splice(0, numberOfMessagesToRemove);
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
