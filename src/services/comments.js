import { comments as data } from "../data/comments";
import { generateId } from "../utils";

// Private variable to store comments
let comments = [...data];

// Function to get a comment by its ID
export function getCommentById(id) {
  return comments.find(comment => comment.id === id);
}

// Function to get comments by post ID
export function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

// Function to update comment body
export function updateCommentBody(id, body) {
  // Assuming comments is a global variable or defined elsewhere in your code
  comments = comments.map((comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        body
      };
    }
    return comment;
  });
  return getCommentById(id);
}

// Function to delete comment by ID
export function deleteCommentById(id) {
  comments = comments.filter((comment) => comment !== id);
  return `Comment: " ${getCommentById(id).body} "  has been deleted`
}

// Function to add a new comment
export function addComment(comment) {
  const newCommentId = generateId(comments);
  const newComment = { id: newCommentId, ...comment };
  comments.push(newComment);
  return newComment;
}
