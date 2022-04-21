import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PostsListComponent },
      { path: 'post/new', component: PostDetailsComponent },
      { path: 'post/:postId', component: PostDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    PostsListComponent,
    PostCardComponent,
    PostDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
