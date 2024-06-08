import React from "react";
import Comment from "./Comment";

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Commants:</h1>
      <Comment/>
    </div>
  );
};

export default CommentContainer;
