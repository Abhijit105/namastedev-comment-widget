function comment(): void {
  const commentBtn = document.getElementById("comment-btn");

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
}
