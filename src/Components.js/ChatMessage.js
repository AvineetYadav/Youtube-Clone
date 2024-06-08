import React from "react";
import { USER_ICON } from "../utils/constant";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" src={USER_ICON} />
      <span className="font-bold  px-4">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
