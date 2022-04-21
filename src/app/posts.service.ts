import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostsService {
  posts: Post[] = [];

  constructor() {}

  addPost(post: Post) {
    this.posts.push(post);
  }

  getAllPosts() {
    return this.posts;
  }

  getOnePost(postId) {
    return this.posts.find((post) => post.id === postId);
  }

  clearPosts() {
    this.posts = [];
    return this.posts;
  }
}
