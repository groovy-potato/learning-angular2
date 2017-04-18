import { Component, Input } from '@angular/core';

@Component({
    selector: "tweet",
    templateUrl: "app/tweet.component.html"
})

export class TweetComponent{
    //TODO: create model
    //static object for test
    @Input() tweet: {
     image: string;
     displayName: string;
     username: string;
     text: string;
     isLiked: boolean;
     numLikes: number;
    }




}