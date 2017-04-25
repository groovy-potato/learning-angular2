import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors.component';
import { AuthorService } from './author.service';
import { TweetsService } from './tweets.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { TweetComponent } from './tweet.component';
import { ZippyComponent } from './zippy.component';
import { SubscribeComponent } from './subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SignUpFormComponent} from './signup-form.component'
import { ChangePasswordComponent } from './change-password.component'


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule ],
  declarations: [ 
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    FavoriteComponent,
    LikeComponent,
    VoteComponent,
    TweetComponent,
    ZippyComponent,
    SubscribeComponent,
    SignUpFormComponent,
    ChangePasswordComponent
    ],
    providers: [
      CourseService,
      AuthorService,
      TweetsService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
