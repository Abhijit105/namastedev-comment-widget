import Comment from "./comment.tsx";

const { addComment } = Comment;

const commentsEl = document.querySelector(".comments");
const commentBtn = document.getElementById("comment-btn");

commentBtn!.addEventListener("click", () => {
  const commentBoxEl = document.createElement("div");
  commentBoxEl.setAttribute("class", "comment-box");
  const commentTextarea = document.createElement("textarea");
  commentTextarea.setAttribute("class", "comment-textarea");
  const submitCommentBtn = document.createElement("button");
  submitCommentBtn.setAttribute("class", "btn submit-comment-btn");
  submitCommentBtn!.textContent = "Comment";
  commentBoxEl!.append(commentTextarea, submitCommentBtn);
  commentsEl!.appendChild(commentBoxEl);
});
