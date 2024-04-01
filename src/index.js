//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById, addUser } from "./services/users";
import { addComment, deleteCommentById, getCommentById, getCommentsByPostId, updateCommentBody } from "./services/comments"
import { addPost, deletePostById, deletePostsByUserId, getPostById, getPosts, getPostsByUser, updatePost, updatePostBody, updatePostTitle } from "./services/posts";


updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());

console.log(getUserById(1))

const newUser = addUser({ name: "Gol D. Roger", email: "roger@77.com", phone:"1-770-736-8031 x56442", username: "HakiUser", website:"pirateking.org" });
console.log("New user:", newUser);

console.log(getCommentById(1));

console.log(getCommentsByPostId(1));

console.log(updateCommentBody(2,"New Comment Buddy"));

console.log(deleteCommentById(3));

console.log(addComment( {
    postId: 77,
    name: "Kaizoku oni ore wa naru",
    email: "luffy@strawhats.com",
    body: "If I give up now, I’m going to regret it.",
  },));

console.log(getPosts());

console.log(getPostsByUser(1));

console.log(getPostById(1));

console.log(addPost({
    userId: 777,
    title: "Santouryu",
    body: "Rengoku Onikiri/Onigiri",
  }));

console.log(updatePostTitle(3,"One Piece"));

console.log(updatePostBody(7, "Nami Chwaaaaan"));

console.log(updatePost(3, {
    title: "Vinsmoke Sanji",
    body: "soba mask the invisible",
  }));

console.log(updatePost(1, {
    body: "soba mask the invisible"
  }));

console.log(updatePost(1, {
    title: "Vinsmoke Sanji"
  }));

console.log(deletePostById(1));

console.log(deletePostsByUserId(31));

