import React, { useEffect, useState } from "react";
import DISLIKE from "../assets/dislike-svgrepo-com.svg";
import LIKE from "../assets/like-1-svgrepo-com.svg";
import { useSearchParams } from "react-router-dom";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [videoId] = useSearchParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(process.env.YOUTUBE_COMMENT_API + `${videoId.get("v")}`);
      const data = await res.json();
      setComments(
        data.items.map((comment) => ({ ...comment, showReplies: false }))
      );
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleToggleReplies = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      )
    );
  };

  return (
    <div className="comment-section border-2 rounded-md mt-4 p-3">
      {comments?.map((comment) => {
        const commentSnippet = comment?.snippet?.topLevelComment?.snippet;
        const replies = comment?.replies?.comments;
        console.log(comment.replies);

        return (
          commentSnippet && (
            <div key={comment.id} className="flex p-2 rounded mb-2">
              <img
                className="w-8 h-8 flex items-center rounded-full"
                src={commentSnippet?.authorProfileImageUrl}
                alt={`${commentSnippet.authorDisplayName}'s profile`}
              />
              <div className="ml-2">
                <div className="font-semibold text-sm">
                  {commentSnippet.authorDisplayName}
                </div>
                <p className=" text-sm">{commentSnippet.textDisplay}</p>
                <div className="flex items-center cursor-pointer">
                  <div className="flex items-center">
                    <img className="w-5" src={LIKE} alt="like" />
                    <span className="ml-2">{commentSnippet.likeCount}</span>
                  </div>
                  <img className="w-5 ml-5" src={DISLIKE} alt="dislike" />
                  <button
                    className="ml-4"
                    onClick={() => handleToggleReplies(comment.id)}
                  >
                    {comment?.replies
                      ? comment?.showReplies
                        ? `Reply (${
                            replies?.length === undefined
                              ? `0`
                              : replies?.length
                          })`
                        : `^ Reply (${
                            replies?.length === undefined
                              ? `0`
                              : replies?.length
                          })`
                      : ""}
                  </button>
                </div>
                {comment.showReplies &&
                  replies?.map((reply) => {
                    const replySnippet = reply?.snippet;
                    return (
                      replySnippet && (
                        <div
                          key={reply.id}
                          className="flex  p-2 rounded mb-2 ml-8"
                        >
                          <img
                            className="w-5 h-5"
                            src={replySnippet?.authorProfileImageUrl}
                            alt={`${replySnippet.authorDisplayName}'s profile`}
                          />
                          <div className="ml-2">
                            <div className="font-bold">
                              {replySnippet.authorDisplayName}
                            </div>
                            <p>{replySnippet.textDisplay}</p>
                            <div className="flex items-center cursor-pointer">
                              <div className="flex items-center">
                                <img className="w-5" src={LIKE} alt="like" />
                                <span className="ml-2">
                                  {replySnippet.likeCount}
                                </span>
                              </div>
                              <img
                                className="w-5 ml-5"
                                src={DISLIKE}
                                alt="dislike"
                              />
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Comment;
