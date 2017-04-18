import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "like",
    template: `<i
    (click)="like()"
    [ngClass]="{
        'glyphicon glyphicon-heart': true,
        'liked': isLiked
    }"
    ></i>{{ numLikes }}`,
    styleUrls: ["app/like.component.css"]
})

export class LikeComponent{
   @Input() isLiked=false;
   @Input() numLikes=0;
   @Output() change = new EventEmitter();
    like(){
        this.isLiked=!this.isLiked;
        this.numLikes+= this.isLiked ? 1 : -1;
        this.change.emit({newNumLikes: this.numLikes })
    }

}