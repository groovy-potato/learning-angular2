import { Component } from '@angular/core';
import { TweetsService } from './tweets.service'
@Component({
  selector: 'my-app',
  template: `
            <tweet *ngFor="let item of tweets" [tweet]="item"></tweet>
            `
})
export class AppComponent {
  tweets: any[];
  constructor(private tweetsService: TweetsService){
    this.tweets = tweetsService.getTweets();
  }

 }
