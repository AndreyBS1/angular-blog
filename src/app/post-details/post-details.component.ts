import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;
  isNewPost: Boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  back() {
    this.router.navigate(['']);
  }

  save() {
    if (!this.isNewPost) {
      // this.postsService.changePost(this.post);
      this.postsService.posts[this.post.id] = this.post;
      this.router.navigate(['']);
    } else {
      if (this.post.title && this.post.text) {
        this.postsService.addPost(this.post);
        this.router.navigate(['']);
      } else {
        window.alert('Пожалуйста, заполните все поля!');
      }
    }
  }

  delete() {
    if (this.isNewPost) {
      window.alert('Нельзя удалить несуществующий пост!');
    } else {
      const result = window.confirm('Вы уверены?');
      if (result) {
        this.postsService.deletePost(this.post.id);
        this.router.navigate(['']);
      }
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.get('postId')) {
      this.isNewPost = false;
    } else {
      this.isNewPost = true;
    }

    if (!this.isNewPost) {
      const postIdFromRoute = Number(routeParams.get('postId'));
      this.post = this.postsService.getOnePost(postIdFromRoute);
    } else {
      this.post = {
        id: this.postsService.getAllPosts().length,
        title: '',
        text: '',
      };
    }
  }
}
