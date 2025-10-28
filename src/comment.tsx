function comment(): {
  getComments: () => Array<string>;
  setComments: () => void;
  addComment: (newComment: string) => void;
} {
  const postEl = document.querySelector(".post");
  const commentsEl = document.querySelector(".comments");

  let comments: Array<string> = [];

  function getComments(): Array<string> {
    return comments;
  }

  function setComments(
    callback?:
      | ((previous: Array<string> | undefined) => Array<string>)
      | Array<string>,
  ): void {
    if (!callback) {
      return;
    }

    if (
      Array.isArray(callback) &&
      callback.every((item: string): boolean => typeof item === "string") &&
      callback.length !== 0
    ) {
      comments = callback;
    } else if (typeof callback === "function") {
      comments = callback(comments);
    }
  }

  function addComment(newComment: string): void {
    if (typeof newComment !== "string" || !newComment) {
      return;
    }

    comments.push(newComment);
    renderComments();
  }

  function renderComments(): void {
    if (!Array.isArray(comments) || comments.length === 0) {
      return;
    }

    comments.forEach((comment: string): void => {
      const commentEl = document.createElement("div");
      commentEl.setAttribute("class", "comment");
      const commentTextEl = document.createElement("p");
      commentTextEl.textContent = comment;
      commentEl.appendChild(commentTextEl);
      commentsEl!.appendChild(commentEl);
    });
  }

  return {
    getComments,
    setComments,
    addComment,
  };
}

const Comment = comment();

export default Comment;
