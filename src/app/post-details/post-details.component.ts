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

  save(post) {
    if (!this.isNewPost) {
      this.postsService.changePost(post);
      this.router.navigate(['']);
    } else {
      if (post.title && post.text) {
        this.postsService.addPost(post);
        this.router.navigate(['']);
      } else {
        window.alert('Пожалуйста, заполните все поля!');
      }
    }
  }

  delete(post) {
    if (this.isNewPost) {
      window.alert('Нельзя удалить несуществующий пост!');
    } else {
      this.postsService.deletePost(post);
      this.router.navigate(['']);
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
      const newPostId = this.postsService.getAllPosts().length;
      this.post = {
        id: newPostId,
        title: '',
        text: '',
      };
    }
  }
}
