import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [
    {
      id: 0,
      title: 'Test',
      text: 'Test',
    },
  ];

  constructor() {}

  addPost(post: Post) {
    this.posts.push(post);
  }

  getAllPosts() {
    return this.posts;
  }

  getOnePost(postId) {
    // return this.posts.find((post) => post.id === postId);
    return this.posts[postId];
  }

  changePost(newPost) {
    this.posts[newPost.id] = newPost;
  }

  deletePost(postId) {
    this.posts.splice(postId, 1);
  }
}
