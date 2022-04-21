import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts = [];

  constructor(private postsService: PostsService, private router: Router) {}

  add() {
    this.router.navigate(['post/new']);
  }

  ngOnInit(): void {
    this.posts = this.postsService.getAllPosts();
  }
}
