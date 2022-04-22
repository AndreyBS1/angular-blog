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
  modalVis = false;

  constructor(private postsService: PostsService, private router: Router) {}

  showModal() {
    this.modalVis = true;
  }

  hideModal() {
    this.modalVis = false;
  }

  ngOnInit(): void {
    this.posts = this.postsService.getAllPosts();
  }
}
