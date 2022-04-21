import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
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
    const post = {
      id: this.posts[postId].id,
      title: this.posts[postId].title,
      text: this.posts[postId].text,
    };
    return post;
  }

  changePost(post) {
    this.posts[post.id] = post;
  }

  deletePost(post) {
    this.posts.splice(post.id, 1);
  }
}
