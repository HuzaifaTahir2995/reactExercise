import { posts as data } from "../data/posts";
import { generateId } from "../utils";

// Private variable to store posts
let posts = [...data];

export function getPosts() {
  // Return all posts
  return [...posts];
}

export function getPostsByUser(userId) {
  return posts.filter(post => post.userId === userId);
}

export function getPostById(id) {
  return posts.find(post => post.id === id);
}

export function addPost(post) {
  const newPostId = generateId(posts);
  const newPost = { id: newPostId, ...post };
  posts.push(newPost);
  return newPost;
}

export function updatePostTitle(id, title) {
  posts = posts.map((post) =>{
    if (post.id === id) {
      return{
        ...post,
      title
    };
   }
   return post; 
  });
  return getPostById(id); 
}

export function updatePostBody(id, body) {
  posts = posts.map((post) =>{
    if (post.id === id) {
      return{
        ...post,
      body
    };
   }
   return post; 
  });
  return getPostById(id); 
}

export function updatePost(id, updatedPosts) {
  posts = posts.map((post) => {
    if (post.id === id) {
      // If updatedPosts has title, update the title
      if (updatedPosts.title) {
        post.title = updatedPosts.title;
      }
      
      // If updatedPosts has body, update the body
      if (updatedPosts.body) {
        post.body = updatedPosts.body;
      }
    }
    return post;
  });
  
  // Return the updated post
  return getPostById(id);
}

export function deletePostById(id) {
  posts = posts.filter((post) => post !== id);
  return `Post with Id:${getPostById(id).id} and Title: ${getPostById(id).title}   has been deleted`
}

export function deletePostsByUserId(userId) {
  posts = posts.filter(post => post.userId !== userId);
  return `Post with UserId:${getPostById(userId).id} and Title: ${getPostById(userId).title}   has been deleted`
}
