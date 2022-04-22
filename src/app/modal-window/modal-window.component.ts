import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnInit {
  @Output() close = new EventEmitter();

  post: Post | undefined;

  constructor(private postsService: PostsService) {}

  save() {
    this.postsService.addPost(this.post);
    this.close.emit();
  }

  cancel() {
    this.close.emit();
  }

  ngOnInit() {
    this.post = {
      id: this.postsService.getAllPosts().length,
      title: '',
      text: '',
    };
  }
}
