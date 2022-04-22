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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  back() {
    this.router.navigate(['']);
  }

  save() {
    this.postsService.posts[this.post.id] = this.post;
    this.router.navigate(['']);
  }

  delete() {
    const result = window.confirm('Вы уверены?');
    if (result) {
      this.postsService.deletePost(this.post.id);
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;

    const postIdFromRoute = Number(routeParams.get('postId'));
    this.post = this.postsService.getOnePost(postIdFromRoute);
  }
}
