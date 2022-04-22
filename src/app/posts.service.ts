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
    const post = this.posts.find((post) => post.id === postId);
    // const postCopy = {
    //   id: post.id,
    //   title: post.title,
    //   text: post.text,
    // };
    // return postCopy;
    return post;
  }

  // changePost(post) {
  //   this.posts[post.id] = post;
  // }

  deletePost(postId) {
    this.posts.splice(postId, 1);
  }
}
