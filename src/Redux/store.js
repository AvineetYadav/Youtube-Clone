import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchValueSlice from "./searchValueSlice";
import channelInfoSlice from "./channelInfoSlice";
import videoContainerSilce from "./videoContainerSilce";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    searchValue: searchValueSlice,
    channelInfo: channelInfoSlice,
    videoContainer:videoContainerSilce,
  },
});

export default store;
