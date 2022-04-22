import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnInit {
  post: Post | undefined;

  constructor(private postsService: PostsService) {}

  save() {
    this.postsService.addPost(this.post);
  }

  cancel() {}

  ngOnInit() {
    this.post = {
      id: this.postsService.getAllPosts().length,
      title: '',
      text: '',
    };
  }
}
